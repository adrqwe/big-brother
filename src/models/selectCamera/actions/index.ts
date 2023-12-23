import { deprecated, createAsyncAction } from "typesafe-actions";
import {
  MOUNTED_SELECTED_CAMERAS,
  _GET_SELECTED_CAMERAS_FAILURE,
  _GET_SELECTED_CAMERAS_REQUEST,
  _GET_SELECTED_CAMERAS_SUCCESS,
} from "../constants/constants";
import { TSelectedCamerasSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const mountedSelectedCameras = createStandardAction(
  MOUNTED_SELECTED_CAMERAS
)();

export const getSelectedCameras = createAsyncAction(
  _GET_SELECTED_CAMERAS_REQUEST,
  _GET_SELECTED_CAMERAS_SUCCESS,
  _GET_SELECTED_CAMERAS_FAILURE
)<null, TSelectedCamerasSuccessPayload, Error>();
