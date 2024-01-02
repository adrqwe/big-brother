import ProductsService from "../services/$products-service";
import SelectCameraService from "../services/$selectCamera-service";
import WeatherApiService from "../services/$weatherApi-service";
import WhoIsInHomeService from "../services/$whoIsInHome-service";

const services = {
  productsService: ProductsService,
  selectCameraService: SelectCameraService,
  weatherApiService: WeatherApiService,
  whoIsInHomeService: WhoIsInHomeService,
};
export type IServices = typeof services;

export default services;
