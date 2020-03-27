const initialState = {
  value: '',
  results: [],
  loading: false,
  files: [],
  view: 'repos',
};

// Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const SEARCH_REPOS = 'SEARCH_REPOS';
const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const FIND_ONE_REPO = 'FIND_ONE_REPO';
const RECEIVE_FILES = 'RECEIVE_FILES';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        value: action.value,
      };
      case FIND_ONE_REPO:
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
      case RECEIVE_FILES: {
        return {
          ...state,
          files: [...action.files],
          loading: false,
          view: 'files',
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

export const findOneRepo = url => ({
  type: FIND_ONE_REPO,
  url,
})

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
})

export const receiveFiles = files => ({
  type: RECEIVE_FILES,
  files,
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
