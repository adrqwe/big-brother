import { combineEpics } from "redux-observable";

import * as SelectCamera from "../models/selectCamera/epics";
import * as WeatherApi from "../models/weatherApi/epics";
import * as WhoIsInHome from "../models/whoIsInHome/epics";

export default combineEpics(
  SelectCamera.fetchSelectedCamerasMounted,
  SelectCamera.getSelectedCamerasWhenRequested,
  SelectCamera.fetchMovingObjectsMounted,
  SelectCamera.getMovingObjectsWhenRequested,

  WeatherApi.fetchTodayWeatherMounted,
  WeatherApi.getTodayWeatherWhenRequested,
  WeatherApi.fetchForecastWeatherMounted,
  WeatherApi.getForecastWeatherWhenRequested,

  WhoIsInHome.fetchWhoIsInHomeMounted,
  WhoIsInHome.getWhoIsInHomeWhenRequested
);
