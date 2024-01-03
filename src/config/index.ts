import { api } from "./api";
import { IConfig } from "./types";

const config: IConfig = {
  iframeFront: api.iframeFront,
  defaultAPI: api.defaultAPI,
  weatherApi: "https://api.openweathermap.org/data/2.5/",
  weatherApiKey: api.weatherApiKey,
};
export default config;
