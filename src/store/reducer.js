const initialState = {
  count: 0,
  message: 'Welcome to React',
};

// Types
const COUNT_UP = 'COUNT_UP';

// Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNT_UP:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

// Action creators
export const countUp = () => ({
  type: COUNT_UP,
});

export default reducer;
