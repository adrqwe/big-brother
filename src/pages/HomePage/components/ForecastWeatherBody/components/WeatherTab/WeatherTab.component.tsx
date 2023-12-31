import weatherIcon from "../../../WeatherIcon/WeatherIcon";
import { useStyles } from "./WeatherTab.styles";
import { IWeatherTab } from "./WeatherTab.types";

const WeatherTab = ({
  image,
  bottomText,
  tempTop,
  tempBottom,
}: IWeatherTab) => {
  const classes = useStyles();

  return (
    <span className={classes.weatherTabContainer}>
      <span className={classes.imageSpan}>
        <img src={weatherIcon[image]} alt="Ikona pogody" height={"100%"} />
        <span className={classes.tempSpanTop}>{tempTop}</span>
        <span className={classes.tempSpanBottom}>{tempBottom}</span>
      </span>
      <span className={classes.bottomTextSpan}>{bottomText}</span>
    </span>
  );
};

export default WeatherTab;
