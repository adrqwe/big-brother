import { ActionType, StateType } from "typesafe-actions";
import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface ISelectCameraReducer {
  selectedCameras: TSelectedCamerasSuccessPayload;
}
export type TSelectedCamerasSuccessPayload = {
  0: Boolean;
  1: Boolean;
  2: Boolean;
  3: Boolean;
};
