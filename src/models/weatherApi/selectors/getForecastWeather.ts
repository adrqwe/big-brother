import _Store from "@Store";
import { Selector } from "reselect";

import { TForecastWeatherSuccessPayload } from "../types";

export const getForecastWeather: Selector<
  _Store.IState,
  TForecastWeatherSuccessPayload | null
> = (state) => state.weatherApi.forecastWeather;
