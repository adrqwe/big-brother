import { combineEpics } from "redux-observable";
// Import modules

import * as Products from "../models/products/epics";

export default combineEpics(
  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested
);
