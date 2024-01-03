import SelectCameraService from "../services/$selectCamera-service";
import WeatherApiService from "../services/$weatherApi-service";
import WhoIsInHomeService from "../services/$whoIsInHome-service";

const services = {
  selectCameraService: SelectCameraService,
  weatherApiService: WeatherApiService,
  whoIsInHomeService: WhoIsInHomeService,
};
export type IServices = typeof services;

export default services;
