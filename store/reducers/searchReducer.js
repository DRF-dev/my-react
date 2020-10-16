export const initState = { search: '' };

const reducers = (state = initState, action) => {
  let nextState;
  switch (action.type) {
    case 'change':
      nextState = { search: action.search };
      return nextState;
    default:
      return state;
  }
};

export default reducers;
