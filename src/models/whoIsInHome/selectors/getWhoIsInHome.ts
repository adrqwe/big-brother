import _Store from "@Store";
import { Selector } from "reselect";

import { TWhoIsInHomeSuccessPayload } from "../types";

export const getWhoIsInHome: Selector<
  _Store.IState,
  TWhoIsInHomeSuccessPayload
> = (state) => state.whoIsInHome.whoIsInHome;
