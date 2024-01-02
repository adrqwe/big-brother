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

import { mountedWhoIsInHome, getWhoIsInHome } from "../actions";

export const fetchWhoIsInHomeMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedWhoIsInHome)),
    mergeMap$((action) => {
      return of$(getWhoIsInHome.request(null));
    })
  );
};

export const getWhoIsInHomeWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { whoIsInHomeService }
) => {
  return action$.pipe(
    filter$(isActionOf(getWhoIsInHome.request)),
    mergeMap$((action) => {
      return from$(whoIsInHomeService.getWhoIsInHome()).pipe(
        mergeMap$((data) => {
          return of$(getWhoIsInHome.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => whoIsInHomeService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getWhoIsInHome.failure(error));
        })
      );
    })
  );
};
