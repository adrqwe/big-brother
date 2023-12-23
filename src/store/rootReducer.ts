import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";
import selectCameraReducer from "../models/selectCamera/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  selectCamera: selectCameraReducer,
});
export default rootReducer;
