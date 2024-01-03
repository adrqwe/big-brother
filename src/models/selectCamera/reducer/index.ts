import { getType } from "typesafe-actions";

import { getMovingObjects, getSelectedCameras } from "../actions";
import { IAction, ISelectCameraReducer } from "../types";

const initialState: ISelectCameraReducer = {
  selectedCameras: { 0: false, 1: false, 2: false, 3: false },
  movingObjects: 100,
};

const selectCameraReducer = (
  state: ISelectCameraReducer = initialState,
  action: IAction
): ISelectCameraReducer => {
  switch (action.type) {
    case getType(getSelectedCameras.success):
      return {
        ...state,
        selectedCameras: action.payload,
      };
    case getType(getMovingObjects.success):
      return {
        ...state,
        movingObjects: action.payload,
      };
    default:
      return state;
  }
};

export default selectCameraReducer;
