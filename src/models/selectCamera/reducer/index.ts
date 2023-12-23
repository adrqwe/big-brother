import { getType } from "typesafe-actions";

import { getSelectedCameras } from "../actions";
import { IAction, ISelectCameraReducer } from "../types";

const initialState: ISelectCameraReducer = {
  selectedCameras: { 0: false, 1: false, 2: false, 3: false },
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
    default:
      return state;
  }
};

export default selectCameraReducer;
