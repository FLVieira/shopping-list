const INITIAL_STATE = {
  products: [],
  list: false,
};

export default function addProduct(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const newState = { ...state };
      newState.products = [...state.products, { ...action.product, total: getItemTotal(action.product) }];
      newState.list = action.list;
      return newState;
    }
    default: return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity;
}
