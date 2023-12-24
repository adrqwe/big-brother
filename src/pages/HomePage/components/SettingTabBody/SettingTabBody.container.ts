import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import SettingTabBody from "./SettingTabBody.component";
import {
  ISettingTabBodyFromState,
  ISettingTabBodyFromDispatch,
} from "./SettingTabBody.types";
import { getMoveDetectionSetting } from "../../../../models/settings/selectors/getMoveDetectionSetting";
import { setMoveDetectionSetting } from "../../../../models/settings/actions";

const mapStateToProps = (state: _Store.IState): ISettingTabBodyFromState => ({
  getMoveDetectionSetting: getMoveDetectionSetting(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): ISettingTabBodyFromDispatch => ({
  setMoveDetectionSetting: (data) => dispatch(setMoveDetectionSetting(data)),
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
