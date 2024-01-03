export interface ISettingTabBodyFromState {
  getMoveDetectionSetting: boolean;
  getMovingObjectsSetting: boolean;
}
export interface ISettingTabBodyFromDispatch {
  setMoveDetectionSetting: (data: boolean) => void;
  setMovingObjectsSetting: (data: boolean) => void;
}
export type ISettingTabBodyProps = ISettingTabBodyFromState &
  ISettingTabBodyFromDispatch;
