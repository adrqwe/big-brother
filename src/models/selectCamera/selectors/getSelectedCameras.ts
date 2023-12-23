import _Store from "@Store";
import { Selector } from "reselect";
import { TSelectedCamerasSuccessPayload } from "../types";

export const getSelectedCameras: Selector<
  _Store.IState,
  TSelectedCamerasSuccessPayload
> = (state) => state.selectCamera.selectedCameras;
