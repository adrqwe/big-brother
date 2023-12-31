import {
  TForecastWeatherSuccessPayload,
  TWeatherIcon,
} from "../../../../models/weatherApi/types";

export type TForecastList = {
  tempMax: number;
  tempMin: number;
  icon: TWeatherIcon;
  bottomText: string;
};

export interface IForecastWeatherBodyFromState {
  getForecastWeather: TForecastWeatherSuccessPayload | null;
}
export interface IForecastWeatherBodyFromDispatch {
  mountedForecastWeather: () => void;
}
export type IForecastWeatherBodyProps = IForecastWeatherBodyFromState &
  IForecastWeatherBodyFromDispatch;
