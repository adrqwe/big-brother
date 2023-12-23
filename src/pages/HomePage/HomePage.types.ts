import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";

export interface IHomePageFromState {
  getSelectedCameras: TSelectedCamerasSuccessPayload;
}
export interface IHomePageFromDispatch {
  mountedSelectedCameras: () => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
