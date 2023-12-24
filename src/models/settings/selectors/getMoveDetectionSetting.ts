import _Store from "@Store";
import { Selector } from "reselect";

export const getMoveDetectionSetting: Selector<_Store.IState, boolean> = (
  state
) => state.settings.moveDetectionSetting;
