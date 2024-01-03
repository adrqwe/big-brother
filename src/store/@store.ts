import { Epic } from "redux-observable";
import { StateType } from "typesafe-actions";

import rootReducer from "./rootReducer";
import { IServices } from "./services";

import { IAction as ISelectCameraAction } from "./../models/selectCamera/types";
import { IAction as ISettingsAction } from "./../models/settings/types";
import { IAction as IWeatherApiAction } from "./../models/weatherApi/types";
import { IAction as IWhoIsInHomeAction } from "./../models/whoIsInHome/types";

declare module "@Store" {
  export type IState = StateType<typeof rootReducer>;

  export type IAction =
    | ISelectCameraAction
    | ISettingsAction
    | IWeatherApiAction
    | IWhoIsInHomeAction;

  export type IService = IServices;
  export type IEpic = Epic<IAction, IAction, IState, IService>;
}
