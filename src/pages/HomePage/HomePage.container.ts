import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import HomePage from "./HomePage.component";
import _Store from "@Store";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({});
export default connect<
  IHomePageFromState,
  IHomePageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
