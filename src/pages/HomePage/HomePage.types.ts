import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";
import { TTodayWeatherSuccessPayload } from "../../models/weatherApi/types";

export interface IHomePageFromState {
  getSelectedCameras: TSelectedCamerasSuccessPayload;
  getMoveDetectionSetting: boolean;
  getTodayWeather: TTodayWeatherSuccessPayload | null;
}
export interface IHomePageFromDispatch {
  mountedSelectedCameras: () => void;
  mountedTodayWeather: () => void;
}
export type IHomePageProps = IHomePageFromState & IHomePageFromDispatch;
