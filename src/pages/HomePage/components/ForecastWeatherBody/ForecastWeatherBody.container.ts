import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import _Store from "@Store";

import ForecastWeatherBody from "./ForecastWeatherBody.component";
import {
  IForecastWeatherBodyFromDispatch,
  IForecastWeatherBodyFromState,
} from "./ForecastWeatherBody.types";
import { mountedForecastWeather } from "../../../../models/weatherApi/actions";
import { getForecastWeather } from "../../../../models/weatherApi/selectors/getForecastWeather";

const mapStateToProps = (
  state: _Store.IState
): IForecastWeatherBodyFromState => ({
  getForecastWeather: getForecastWeather(state),
});

const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>
): IForecastWeatherBodyFromDispatch => ({
  mountedForecastWeather: () => dispatch(mountedForecastWeather()),
});

export default connect<
  IForecastWeatherBodyFromState,
  IForecastWeatherBodyFromDispatch,
  {},
  _Store.IState
>(
  mapStateToProps,
  mapDispatchToProps
)(ForecastWeatherBody);
