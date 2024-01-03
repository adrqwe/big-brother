import _Store from "@Store";
import { Selector } from "reselect";

import { TTodayWeatherSuccessPayload } from "../types";

export const getTodayWeather: Selector<
  _Store.IState,
  TTodayWeatherSuccessPayload | null
> = (state) => state.weatherApi.todayWeather;
