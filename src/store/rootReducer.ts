import { combineReducers } from "redux";

import productsReducer from "../models/products/reducer";
import selectCameraReducer from "../models/selectCamera/reducer";
import settingsReducer from "../models/settings/reducer";
import weatherApiReducer from "../models/weatherApi/reducer";
import whoIsInHomeReducer from "../models/whoIsInHome/reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  selectCamera: selectCameraReducer,
  settings: settingsReducer,
  weatherApi: weatherApiReducer,
  whoIsInHome: whoIsInHomeReducer,
});
export default rootReducer;
