import { combineEpics } from "redux-observable";
// Import modules

import * as Products from "../models/products/epics";
import * as SelectCamera from "../models/selectCamera/epics";

export default combineEpics(
  Products.fetchProductsWhenMounted,
  Products.getProductsWhenRequested,
  Products.fetchSingleProductWhenMounted,
  Products.getSingleProductWhenRequested,

  SelectCamera.fetchSelectedCamerasMounted,
  SelectCamera.getSelectedCamerasWhenRequested
);
