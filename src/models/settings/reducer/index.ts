import { getType } from "typesafe-actions";

import { setMoveDetectionSetting, setMovingObjectsSetting } from "../actions";
import { IAction, ISettingsReducer } from "../types";

const initialState: ISettingsReducer = {
  moveDetectionSetting: true,
  movingObjectsSetting: false,
};

const selectCameraReducer = (
  state: ISettingsReducer = initialState,
  action: IAction
): ISettingsReducer => {
  switch (action.type) {
    case getType(setMoveDetectionSetting):
      return {
        ...state,
        moveDetectionSetting: action.payload,
      };
    case getType(setMovingObjectsSetting):
      return {
        ...state,
        movingObjectsSetting: action.payload,
      };
    default:
      return state;
  }
};

export default selectCameraReducer;
