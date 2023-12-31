import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_FORECAST_WEATHER,
  MOUNTED_TODAY_WEATHER,
  _GET_FORECAST_WEATHER_FAILURE,
  _GET_FORECAST_WEATHER_REQUEST,
  _GET_FORECAST_WEATHER_SUCCESS,
  _GET_TODAY_WEATHER_FAILURE,
  _GET_TODAY_WEATHER_REQUEST,
  _GET_TODAY_WEATHER_SUCCESS,
} from "../constants/constants";
import { TTodayWeatherSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const mountedTodayWeather = createStandardAction(
  MOUNTED_TODAY_WEATHER
)();

export const getTodayWeather = createAsyncAction(
  _GET_TODAY_WEATHER_REQUEST,
  _GET_TODAY_WEATHER_SUCCESS,
  _GET_TODAY_WEATHER_FAILURE
)<null, TTodayWeatherSuccessPayload, Error>();

export const mountedForecastWeather = createStandardAction(
  MOUNTED_FORECAST_WEATHER
)();

export const getForecastWeather = createAsyncAction(
  _GET_FORECAST_WEATHER_REQUEST,
  _GET_FORECAST_WEATHER_SUCCESS,
  _GET_FORECAST_WEATHER_FAILURE
)<null, any, Error>();
