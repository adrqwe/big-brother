import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SideTabs from "./SideTabs.component";
import { ISideTabsFromState, ISideTabsFromDispatch } from "./SideTabs.types";

const mapStateToProps = (state: _Store.IState): ISideTabsFromState => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISideTabsFromDispatch => ({});
export default connect<
  ISideTabsFromState,
  ISideTabsFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(SideTabs);
