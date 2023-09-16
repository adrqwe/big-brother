import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
});
export default rootReducer;
