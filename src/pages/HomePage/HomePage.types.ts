import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";
import { TTodayWeatherSuccessPayload } from "../../models/weatherApi/types";
import { TWhoIsInHomeSuccessPayload } from "../../models/whoIsInHome/types";

export interface IHomePageFromState {
  getSelectedCameras: TSelectedCamerasSuccessPayload;
  getMoveDetectionSetting: boolean;
  getTodayWeather: TTodayWeatherSuccessPayload | null;
  getMovingObjectsSetting: boolean;
}
export interface IHomePageFromDispatch {
  mountedSelectedCameras: () => void;
  mountedTodayWeather: () => void;
  mountedWhoIsInHome: () => void;
  setWhoIsInHome: (data: TWhoIsInHomeSuccessPayload) => void;
  mountedMovingObjects: (data: string) => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
