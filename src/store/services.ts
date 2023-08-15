import ProductsService from "../services/$products-service";
const services = {
  productsService: ProductsService,
};
export type IServices = typeof services;

export default services;
