import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  SET_MOVE_DETECTION_SETTING,
  SET_MOVING_OBJECTS_SETTING,
} from "../constants/constants";

const { createStandardAction } = deprecated;

export const setMoveDetectionSetting = createStandardAction(
  SET_MOVE_DETECTION_SETTING
)<boolean>();

export const setMovingObjectsSetting = createStandardAction(
  SET_MOVING_OBJECTS_SETTING
)<boolean>();
