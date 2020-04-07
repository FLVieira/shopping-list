const INITIAL_STATE = {
  product: null,
  list: false,
};

export default function searchVideo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const newState = { ...state };
      newState.product = action.product;
      newState.list = action.list;
      return newState;
    }
    default: return state;
  }
}
