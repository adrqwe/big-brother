import { ActionType, StateType } from "typesafe-actions";
import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface IWhoIsInHomeReducer {
  whoIsInHome: TWhoIsInHomeSuccessPayload;
}
export type TWhoIsInHomeSuccessPayload = {
  status: number;
  data: TDataWhoIsInHome;
};

export type TDataWhoIsInHome = null | string[];
