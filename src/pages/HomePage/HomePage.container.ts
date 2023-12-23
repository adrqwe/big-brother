import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import HomePage from "./HomePage.component";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";
import { getSelectedCameras } from "../../models/selectCamera/selectors/getSelectedCameras";
import { mountedSelectedCameras } from "../../models/selectCamera/actions";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  getSelectedCameras: getSelectedCameras(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mountedSelectedCameras: () => dispatch(mountedSelectedCameras()),
});
export default connect<
  IHomePageFromState,
  IHomePageFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
