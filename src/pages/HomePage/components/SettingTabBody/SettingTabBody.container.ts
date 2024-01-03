import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SettingTabBody from "./SettingTabBody.component";
import {
  ISettingTabBodyFromState,
  ISettingTabBodyFromDispatch,
} from "./SettingTabBody.types";
import { getMoveDetectionSetting } from "../../../../models/settings/selectors/getMoveDetectionSetting";
import {
  setMoveDetectionSetting,
  setMovingObjectsSetting,
} from "../../../../models/settings/actions";
import { getMovingObjectSetting } from "../../../../models/settings/selectors/getMovingObjectsSetting";

const mapStateToProps = (state: _Store.IState): ISettingTabBodyFromState => ({
  getMoveDetectionSetting: getMoveDetectionSetting(state),
  getMovingObjectsSetting: getMovingObjectSetting(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISettingTabBodyFromDispatch => ({
  setMoveDetectionSetting: (data) => dispatch(setMoveDetectionSetting(data)),
  setMovingObjectsSetting: (data) => dispatch(setMovingObjectsSetting(data)),
});

export default connect<
  ISettingTabBodyFromState,
  ISettingTabBodyFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(SettingTabBody);
