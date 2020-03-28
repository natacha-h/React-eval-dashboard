const initialState = {
  value: '',
  results: [],
  loading: false,
  files: [],
  view: 'repos',
  repoName: '',
  repoUrl: '',
};

// Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEARCH_REPOS = 'SEARCH_REPOS';
const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const FIND_ONE_REPO = 'FIND_ONE_REPO';
const RECEIVE_FILES = 'RECEIVE_FILES';
const BACK_TO_RESULTS = 'BACK_TO_RESULTS';

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


// Selectors
// Mise en forme des résultats :
// - Pour le résultat de la recherche
export const formatResults = state => state.results.map(result => ({
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

export default reducer;
