import { getType } from "typesafe-actions";

import { IAction, IWeatherApiReducer } from "../types";
import { getForecastWeather, getTodayWeather } from "../actions";

const initialState: IWeatherApiReducer = {
  todayWeather: null,
  forecastWeather: null,
};

const weatherApiReducer = (
  state: IWeatherApiReducer = initialState,
  action: IAction
): IWeatherApiReducer => {
  switch (action.type) {
    case getType(getTodayWeather.success):
      return {
        ...state,
        todayWeather: action.payload,
      };
    case getType(getForecastWeather.success):
      return {
        ...state,
        forecastWeather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherApiReducer;
