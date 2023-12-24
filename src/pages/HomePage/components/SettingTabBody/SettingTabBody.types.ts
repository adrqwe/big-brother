export interface ISettingTabBodyFromState {
  getMoveDetectionSetting: boolean;
}
export interface ISettingTabBodyFromDispatch {
  setMoveDetectionSetting: (data: boolean) => void;
}
export type ISettingTabBodyProps = ISettingTabBodyFromState &
  ISettingTabBodyFromDispatch;
