import axios, { CancelTokenSource } from "axios";

import config from "./../../config";
import {
  TForecastWeatherSuccessPayload,
  TTodayWeatherSuccessPayload,
} from "../../models/weatherApi/types";

class WeatherApiService {
  private static getTodayWeatherApiUrl() {
    return `${config.weatherApi}weather`;
  }
  private static getForecastWeatherApiUrl() {
    return `${config.weatherApi}forecast`;
  }
  private static getWeatherApiKey() {
    return config.weatherApiKey;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getTodayWeather(): Promise<TTodayWeatherSuccessPayload> {
    return new Promise<TTodayWeatherSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(WeatherApiService.getTodayWeatherApiUrl(), {
          cancelToken: this.cancelTokenProducts.token,
          params: {
            lat: "49.71",
            lon: "20.80",
            lang: "pl",
            units: "metric",
            appid: WeatherApiService.getWeatherApiKey(),
          },
        })
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public getForecastWeather(): Promise<TForecastWeatherSuccessPayload> {
    return new Promise<TForecastWeatherSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(WeatherApiService.getForecastWeatherApiUrl(), {
          cancelToken: this.cancelTokenProducts.token,
          params: {
            lat: "49.71",
            lon: "20.80",
            lang: "pl",
            units: "metric",
            appid: WeatherApiService.getWeatherApiKey(),
          },
        })
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new WeatherApiService();
