import { EMPTY as EMPTY$, from as from$, of as of$ } from "rxjs";
import {
  catchError as catchError$,
  filter as filter$,
  mergeMap as mergeMap$,
  takeUntil as takeUntil$,
  tap as tap$,
} from "rxjs/operators";
import { isActionOf, isOfType } from "typesafe-actions";
import _Store from "@Store";
import { LOCATION_CHANGE } from "react-router-redux";

import { mountedSelectedCameras, getSelectedCameras } from "../actions";

export const fetchSelectedCamerasMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedSelectedCameras)),
    mergeMap$((action) => {
      return of$(getSelectedCameras.request(null));
    })
  );
};

export const getSelectedCamerasWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { selectCameraService }
) => {
  return action$.pipe(
    filter$(isActionOf(getSelectedCameras.request)),
    mergeMap$((action) => {
      return from$(selectCameraService.getSelectedCameras()).pipe(
        mergeMap$((data) => {
          return of$(getSelectedCameras.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => selectCameraService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getSelectedCameras.failure(error));
        })
      );
    })
  );
};
