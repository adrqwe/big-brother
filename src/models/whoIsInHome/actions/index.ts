import { deprecated, createAsyncAction } from "typesafe-actions";

import {
  MOUNTED_WHO_IS_IN_HOME,
  SET_WHO_IS_IN_HOME,
  _GET_WHO_IS_IN_HOME_FAILURE,
  _GET_WHO_IS_IN_HOME_REQUEST,
  _GET_WHO_IS_IN_HOME_SUCCESS,
} from "../constants/constants";
import { TWhoIsInHomeSuccessPayload } from "../types";

const { createStandardAction } = deprecated;

export const setWhoIsInHome =
  createStandardAction(SET_WHO_IS_IN_HOME)<TWhoIsInHomeSuccessPayload>();

export const mountedWhoIsInHome = createStandardAction(
  MOUNTED_WHO_IS_IN_HOME
)();

export const getWhoIsInHome = createAsyncAction(
  _GET_WHO_IS_IN_HOME_REQUEST,
  _GET_WHO_IS_IN_HOME_SUCCESS,
  _GET_WHO_IS_IN_HOME_FAILURE
)<null, TWhoIsInHomeSuccessPayload, Error>();
