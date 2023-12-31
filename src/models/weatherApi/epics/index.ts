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

import {
  getForecastWeather,
  getTodayWeather,
  mountedForecastWeather,
  mountedTodayWeather,
} from "../actions";

export const fetchTodayWeatherMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedTodayWeather)),
    mergeMap$((action) => {
      return of$(getTodayWeather.request(null));
    })
  );
};

export const getTodayWeatherWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { weatherApiService }
) => {
  return action$.pipe(
    filter$(isActionOf(getTodayWeather.request)),
    mergeMap$((action) => {
      return from$(weatherApiService.getTodayWeather()).pipe(
        mergeMap$((data) => {
          return of$(getTodayWeather.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => weatherApiService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getTodayWeather.failure(error));
        })
      );
    })
  );
};

export const fetchForecastWeatherMounted: _Store.IEpic = (action$, state$) => {
  return action$.pipe(
    filter$(isActionOf(mountedForecastWeather)),
    mergeMap$((action) => {
      return of$(getForecastWeather.request(null));
    })
  );
};

export const getForecastWeatherWhenRequested: _Store.IEpic = (
  action$,
  state$,
  { weatherApiService }
) => {
  return action$.pipe(
    filter$(isActionOf(getForecastWeather.request)),
    mergeMap$((action) => {
      return from$(weatherApiService.getForecastWeather()).pipe(
        mergeMap$((data) => {
          return of$(getForecastWeather.success(data));
        }),
        takeUntil$(
          action$.pipe(
            filter$(isOfType(LOCATION_CHANGE)),
            tap$(() => weatherApiService.cancelProducts())
          )
        ),
        catchError$((error) => {
          return of$(getForecastWeather.failure(error));
        })
      );
    })
  );
};
