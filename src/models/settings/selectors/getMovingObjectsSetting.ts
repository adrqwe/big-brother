import _Store from "@Store";
import { Selector } from "reselect";

export const getMovingObjectSetting: Selector<_Store.IState, boolean> = (
  state
) => state.settings.movingObjectsSetting;
