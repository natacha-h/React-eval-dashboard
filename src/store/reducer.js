const initialState = {
  value: '',
  results: [],
  loading: false,
  files: [],
  view: 'repos',
  repoName: '',
  repoUrl: '',
  favRepos: [], // au lieu de ranger juste l'url, copier carrément les repos
  repoIsFav: false,
  isConnected: false,
  message: '',
  userToken: '1cde0240bba2cdf7d7b63f3b7da342405faa2399',
  user: {},
  userRepos: [],
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
// export const GET_USER_OWN_REPOS = 'GET_USER_OWN_REPOS';
// const RECEIVE_USER_OWN_REPOS = 'RECEIVE_USER_OWN_REPOS';
const EMPTY_RESULTS = 'EMPTY_RESULTS';

// inverser la valeur d'un booléen
const toggle = key => !key;

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        value: action.value,
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
        // je vérifie si l'url existe déja dans favRepos
        const favExist = state.favRepos.find(url => (url === state.repoUrl));
        // si elle existe, c'est que je l'ai déjà en favori, c'est donc que j'ai cliqué pour la dé-favoriser
        if (favExist) {
          // donc je dois la retirer du tableau et mettre repoIsFav à false
          const newFavRepos = state.favRepos.filter(url => url !== favExist);
          return {
            ...state,
            favRepos: newFavRepos,
            repoIsFav: false
          }
          // sinon si elle n'existe pas, c'est que je veux l'ajouter en favori
        } else {
          return {
            ...state,
            favRepos: [...state.favRepos, state.repoUrl],
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
      case RECEIVE_USER_INFOS:{
        return{
          ...state,
          user: {...action.user},
          userRepos: [...action.repos],
        }
      }
      // case RECEIVE_USER_OWN_REPOS: {
      //   return {
      //     ...state,
      //     results: [...action.repos]
      //   }
      // }
      case LOG_OUT: {
        return {
          ...state,
          results: [],
          files: [],
          isConnected: false,
          user: {},
          userRepos: [],
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
export const changeInput = value => ({
  type: CHANGE_INPUT,
  value,
});

export const searchRepos = () => ({
  type: SEARCH_REPOS,
});

export const findOneRepo = (url, name) => ({
  type: FIND_ONE_REPO,
  url,
  name,
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
// export const getUserOwnRepos = () => ({
//   type: GET_USER_OWN_REPOS,
// })

// export const receiveUserOwnRepos = repos => ({
//   type: RECEIVE_USER_OWN_REPOS,
//   repos,
// })

export const logOut = () => ({
  type: LOG_OUT,
})

export const emptyResults = () => ({
  type: EMPTY_RESULTS,
})

// Selectors
// Mise en forme des résultats :
// - Pour le résultat de la recherche
// déplacer/exporter  celui là dans middleWare => ça renvoit les résultat mis en forme, je peux passer les différents groupes aux containers (grouper les middleware en fixbug double recherche, ça doit marcher)
export const formatResults = results => results.map(result => ({
  id: result.id,
  name: result.name,
  description: result.description,
  author: result.owner.login,
  image: result.owner.avatar_url,
  repoUrl: `${result.url}/contents`, 
}));

// - Pour l'affichage du contenu d'un Repo
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

export const getFavStatus = state => state.favRepos.includes(state.repoUrl);

export default reducer;
