import ProductsService from "../services/$products-service";
import SelectCameraService from "../services/$selectCamera-service";
import WeatherApiService from "../services/$weatherApi-service";

const services = {
  productsService: ProductsService,
  selectCameraService: SelectCameraService,
  weatherApiService: WeatherApiService,
};
export type IServices = typeof services;

export default services;
