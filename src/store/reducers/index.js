import { combineReducers } from 'redux';

import addProduct from './addProduct';

const rootReducer = combineReducers({
  addProduct,
});

export default rootReducer;
