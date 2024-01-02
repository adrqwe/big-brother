import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import WhoIsInHomeBody from "./WhoIsInHomeBody.component";
import {
  IWhoIsInHomeBodyFromState,
  IWhoIsInHomeBodyFromDispatch,
} from "./WhoIsInHomeBody.types";
import { getWhoIsInHome } from "../../../../models/whoIsInHome/selectors/getWhoIsInHome";

const mapStateToProps = (state: _Store.IState): IWhoIsInHomeBodyFromState => ({
  getWhoIsInHome: getWhoIsInHome(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IWhoIsInHomeBodyFromDispatch => ({});

export default connect<
  IWhoIsInHomeBodyFromState,
  IWhoIsInHomeBodyFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(WhoIsInHomeBody);
