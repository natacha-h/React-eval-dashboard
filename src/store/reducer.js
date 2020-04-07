const initialState = {
  searchValue: '',
  results: [],
  loading: false,
  files: [],
  view: 'repos',
  repoName: '',
  repoUrl: '',
  repoId: '',
  listOfFavs: [], // ici je stocke la liste des id des repos favoris
  favRepos: [], // et ici je stocke une copie des repos favoris, déjà mis en forme
  repoIsFav: false,
  isConnected: false,
  message: 'Utilisez votre token GitHub pour vous connecter',
  userToken: '1cde0240bba2cdf7d7b63f3b7da342405faa2399',
  user: {}, // stocke les infos du user
  userRepos: [], // stocke les repos du user
};

// Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEARCH_REPOS = 'SEARCH_REPOS';
const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const FIND_ONE_REPO = 'FIND_ONE_REPO';
const RECEIVE_FILES = 'RECEIVE_FILES';
const BACK_TO_RESULTS = 'BACK_TO_RESULTS';
const FAV_REPO = 'FAV_REPO';
const CONNECT = 'CONNECT';
export const GET_USER = 'GET_USER';
const RECEIVE_USER_INFOS = 'RECEIVE_USER_INFOS';
const LOG_OUT = 'LOG_OUT';
const EMPTY_RESULTS = 'EMPTY_RESULTS';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
        
      };
      case SEARCH_REPOS: {
        return {
          ...state,
          loading: true,
        }
      }
      case RECEIVE_RESULTS: {
        return {
          ...state,
          value: '',
          results: [...action.results],
          loading: false,
        }
      };
      case FIND_ONE_REPO:{
        return {
          ...state,
          loading: true,
          repoName: action.name,
          repoUrl: action.url,
          repoId: action.id
        }
      }
      case RECEIVE_FILES: {
        return {
          ...state,
          files: [...action.files],
          loading: false,
          view: 'files',
        }
      }
      case BACK_TO_RESULTS: {
        return {
          ...state,
          view: 'repos',
          repoName: '',
          repoUrl: '',
          files: [],
        }
      }
      case FAV_REPO: {
        // je vérifie si le repo existe déja dans listOfFavs
        const favExist = state.listOfFavs.find(id => (id === state.repoId));
        // si il existe, c'est que je l'ai déjà en favori, c'est donc que j'ai cliqué pour le dé-favoriser
        if (favExist) {
          // donc je dois retirer son ID de la liste, retirer le repo du tableau de repos et mettre repoIsFav à false
          const newFavList = state.listOfFavs.filter(id => id !== favExist);
          const newFavRepos = state.favRepos.filter(repo => repo.id !== favExist)
          return {
            ...state,
            listOfFavs: newFavList,
            favRepos: newFavRepos,
            repoIsFav: false
          }
          // sinon si elle n'existe pas, c'est que je veux l'ajouter en favori
        } else {
          // je vais chercher le repo
          const newFav = state.results.filter(result => result.id === state.repoId);
          // et je le rajoute à favRepos
          const newFavRepos = [...state.favRepos, ...newFav]
          return {
            ...state,
            favRepos: newFavRepos,
            listOfFavs: [...state.listOfFavs, state.repoId],
            repoIsFav: true,
          }
        }
      }
      case CONNECT:{
        return{
          ...state,
          isConnected: true,
          message: action.message,
        }
      }
      case GET_USER: {
        return{
          ...state,
          loading: true,
        }
      }
      case RECEIVE_USER_INFOS:{
        return{
          ...state,
          user: {...action.user},
          userRepos: [...action.repos],
        }
      }
      case LOG_OUT: {
        return {
          ...state,
          results: [],
          files: [],
          isConnected: false,
          user: {},
          userRepos: [],
          loading: false,
          message: 'Utilisez votre token GitHub pour vous connecter',
        }
      }
      case EMPTY_RESULTS: {
        return {
          ...state, 
          results: [],
          view: 'repos',
          files: [],
          repoName: '',
          repoUrl: '',
        }
      }
    default:
      return state;
  }
};

// Action creators
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  value,
  name,
});

export const searchRepos = () => ({
  type: SEARCH_REPOS,
});

export const findOneRepo = (url, name, id) => ({
  type: FIND_ONE_REPO,
  url,
  name,
  id
})

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
})

export const receiveFiles = files => ({
  type: RECEIVE_FILES,
  files,
})

export const backToResults = () => ({
  type: BACK_TO_RESULTS,
})

export const favRepo = () => ({
  type: FAV_REPO,
})

export const getUser = () => ({
  type: GET_USER,
})

export const connectUser = message => ({
  type: CONNECT,
  message,
})

export const receiveUserInfos = (user, repos) => ({
  type: RECEIVE_USER_INFOS,
  user,
  repos,
})

export const logOut = () => ({
  type: LOG_OUT,
})

export const emptyResults = () => ({
  type: EMPTY_RESULTS,
})

/************* Selectors ****************/
// Mise en forme des résultats :
  // - Pour le résultat de la recherche (exporté dans middleWares => ça renvoit les résultat mis en forme, je peux passer les différents groupes aux containers)
export const formatResults = results => results.map(result => ({
  id: result.id,
  name: result.name,
  description: result.description,
  author: result.owner.login,
  image: result.owner.avatar_url,
  repoUrl: `${result.url}/contents`, 
}));

  // - Pour l'affichage du contenu d'un Repo (utilisé dans le container RepoFilesList)
export const formatRepoFiles = state =>  {
  const formattedFiles = state.files.map(file => ({
    name: file.name,
    type: file.type
  }));
  // Je récupère uniquement les dossiers
  const onlyFolders = formattedFiles.filter(currentFile => (currentFile.type === 'dir'));
  //Je récupère uniquement les fichiers
  const onlyFiles = formattedFiles.filter(currentFile => (currentFile.type === 'file'));
  // je met tout ça dans l'ordre
  const orderedFiles = [ ...onlyFolders, ...onlyFiles];
   return orderedFiles;
}

// récupérer le status (favoris ou pas) d'un repo
export const getFavStatus = state => state.listOfFavs.includes(state.repoId);

export default reducer;
