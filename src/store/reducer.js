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

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        value: action.value,
      };
      case RECEIVE_RESULTS: {
        return {
          ...state,
          results: [...action.results],
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
})

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
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
// export const formatRepoFiles 

export default reducer;
