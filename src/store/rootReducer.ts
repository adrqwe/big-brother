import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";
import selectCameraReducer from "../models/selectCamera/reducer";
import settingsReducer from "../models/settings/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  selectCamera: selectCameraReducer,
  settings: settingsReducer,
});
export default rootReducer;
