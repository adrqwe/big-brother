import { getType } from "typesafe-actions";

import { setMoveDetectionSetting } from "../actions";
import { IAction, ISettingsReducer } from "../types";

const initialState: ISettingsReducer = {
  moveDetectionSetting: true,
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
    default:
      return state;
  }
};

export default selectCameraReducer;
