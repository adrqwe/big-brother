import { deprecated, createAsyncAction } from "typesafe-actions";

import { SET_MOVE_DETECTION_SETTING } from "../constants/constants";

const { createStandardAction } = deprecated;

export const setMoveDetectionSetting = createStandardAction(
  SET_MOVE_DETECTION_SETTING
)<boolean>();
