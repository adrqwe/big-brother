import { ActionType, StateType } from "typesafe-actions";

import * as actions from "./../actions";

export type IAction = ActionType<typeof actions>;

export interface ISettingsReducer {
  moveDetectionSetting: boolean;
}
