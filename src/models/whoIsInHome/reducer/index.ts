import { getType } from "typesafe-actions";

import { getWhoIsInHome, setWhoIsInHome } from "../actions";
import { IAction, IWhoIsInHomeReducer } from "../types";

const initialState: IWhoIsInHomeReducer = {
  whoIsInHome: { status: 100, data: null },
};

const whoIsInHomeReducer = (
  state: IWhoIsInHomeReducer = initialState,
  action: IAction
): IWhoIsInHomeReducer => {
  switch (action.type) {
    case getType(getWhoIsInHome.success):
      return {
        ...state,
        whoIsInHome: action.payload,
      };
    case getType(setWhoIsInHome):
      return {
        ...state,
        whoIsInHome: action.payload,
      };
    default:
      return state;
  }
};

export default whoIsInHomeReducer;
