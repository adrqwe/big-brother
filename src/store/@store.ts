import { Epic } from "redux-observable";
import { StateType } from "typesafe-actions";
// Import root reducer
import rootReducer from "./rootReducer";
// Import services
import { IServices } from "./services";
// Import model actions
/* @@STORE_COMPONENT@@ */

import { IAction as IProductsAction } from "./../models/products/types";
import { IAction as ISelectCameraAction } from "./../models/selectCamera/types";

declare module "@Store" {
  export type IState = StateType<typeof rootReducer>;
  /* @@STORE_COMPONENT@@ */
  export type IAction = IProductsAction | ISelectCameraAction;

  export type IService = IServices;
  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
