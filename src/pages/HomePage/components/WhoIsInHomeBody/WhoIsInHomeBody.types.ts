import { TWhoIsInHomeSuccessPayload } from "../../../../models/whoIsInHome/types";

export interface IWhoIsInHomeBodyFromState {
  getWhoIsInHome: TWhoIsInHomeSuccessPayload;
}
export interface IWhoIsInHomeBodyFromDispatch {}
export type IWhoIsInHomeBodyProps = IWhoIsInHomeBodyFromState &
  IWhoIsInHomeBodyFromDispatch;
