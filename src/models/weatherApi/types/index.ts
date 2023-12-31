import { ActionType, StateType } from "typesafe-actions";
import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface IWeatherApiReducer {
  todayWeather: TTodayWeatherSuccessPayload | null;
  forecastWeather: TForecastWeatherSuccessPayload | null;
}

export type TForecastWeatherSuccessPayload = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

export interface List {
  dt: number;
  main: MainWeatherForecast;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: SysWeatherForecast;
  dt_txt: string;
  rain?: Rain;
}

export interface MainWeatherForecast {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface SysWeatherForecast {
  pod: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Rain {
  "3h": number;
}

export type TTodayWeatherSuccessPayload = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: TWeatherIcon;
}
export type TWeatherIcon =
  | "01d"
  | "02d"
  | "03d"
  | "04d"
  | "09d"
  | "10d"
  | "11d"
  | "13d"
  | "50d"
  | "01n"
  | "02n"
  | "03n"
  | "04n"
  | "09n"
  | "10n"
  | "11n"
  | "13n"
  | "50n";

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
