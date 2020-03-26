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

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        value,
      };
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
  value: state.value,
});

export const receiveResults = results => ({
  type: RECEIVE_RESULTS,
  results,
})

export default reducer;
