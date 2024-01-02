import { combineEpics } from "redux-observable";

import * as Products from "../models/products/epics";
import * as SelectCamera from "../models/selectCamera/epics";
import * as WeatherApi from "../models/weatherApi/epics";
import * as WhoIsInHome from "../models/whoIsInHome/epics";

export default combineEpics(
  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested,

  SelectCamera.fetchSelectedCamerasMounted,
  SelectCamera.getSelectedCamerasWhenRequested,

  WeatherApi.fetchTodayWeatherMounted,
  WeatherApi.getTodayWeatherWhenRequested,
  WeatherApi.fetchForecastWeatherMounted,
  WeatherApi.getForecastWeatherWhenRequested,

  WhoIsInHome.fetchWhoIsInHomeMounted,
  WhoIsInHome.getWhoIsInHomeWhenRequested
);
