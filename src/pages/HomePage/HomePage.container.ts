import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import HomePage from "./HomePage.component";
import { IHomePageFromState, IHomePageFromDispatch } from "./HomePage.types";
import { getSelectedCameras } from "../../models/selectCamera/selectors/getSelectedCameras";
import { mountedSelectedCameras } from "../../models/selectCamera/actions";
import { getMoveDetectionSetting } from "../../models/settings/selectors/getMoveDetectionSetting";
import { mountedTodayWeather } from "../../models/weatherApi/actions";
import { getTodayWeather } from "../../models/weatherApi/selectors/getTodayWeather";

const mapStateToProps = (state: _Store.IState): IHomePageFromState => ({
  getSelectedCameras: getSelectedCameras(state),
  getMoveDetectionSetting: getMoveDetectionSetting(state),
  getTodayWeather: getTodayWeather(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IHomePageFromDispatch => ({
  mountedSelectedCameras: () => dispatch(mountedSelectedCameras()),
  mountedTodayWeather: () => dispatch(mountedTodayWeather()),
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
