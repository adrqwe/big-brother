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
import { IAction as ISettingsAction } from "./../models/settings/types";
import { IAction as IWeatherApiAction } from "./../models/weatherApi/types";

declare module "@Store" {
  export type IState = StateType<typeof rootReducer>;
  /* @@STORE_COMPONENT@@ */
  export type IAction =
    | IProductsAction
    | ISelectCameraAction
    | ISettingsAction
    | IWeatherApiAction;

  export type IService = IServices;
  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
