import ProductsService from "../services/$products-service";
import SelectCameraService from "../services/$selectCamera-service";

const services = {
  productsService: ProductsService,
  selectCameraService: SelectCameraService,
};
export type IServices = typeof services;

export default services;
