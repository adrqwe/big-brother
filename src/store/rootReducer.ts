import { combineReducers } from "redux";

import selectCameraReducer from "../models/selectCamera/reducer";
import settingsReducer from "../models/settings/reducer";
import weatherApiReducer from "../models/weatherApi/reducer";
import whoIsInHomeReducer from "../models/whoIsInHome/reducer";

const rootReducer = combineReducers({
  selectCamera: selectCameraReducer,
  settings: settingsReducer,
  weatherApi: weatherApiReducer,
  whoIsInHome: whoIsInHomeReducer,
});
export default rootReducer;
