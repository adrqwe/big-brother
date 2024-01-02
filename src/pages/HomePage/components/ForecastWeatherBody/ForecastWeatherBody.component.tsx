import { useEffect } from "react";
import moment from "moment";

import { useStyles } from "./ForecastWeatherBody.styles";
import {
  IForecastWeatherBodyProps,
  TForecastList,
} from "./ForecastWeatherBody.types";
import WeatherTab from "./components/WeatherTab";
import { List, TWeatherIcon } from "../../../../models/weatherApi/types";

const translateDayOfWeek = (day: number) => {
  switch (day) {
    case 0:
      return "niedz.";
    case 1:
      return "pon.";
    case 2:
      return "wt.";
    case 3:
      return "śr.";
    case 4:
      return "czw.";
    case 5:
      return "pt.";
    case 6:
      return "sob.";
  }
};

const ForecastWeatherBody = ({
  getForecastWeather,
  mountedForecastWeather,
}: IForecastWeatherBodyProps) => {
  const classes = useStyles();

  const forecastWeather = (list: List[]) => {
    let array: List[][] = [];
    let object: TForecastList[] = [];

    let index = 0;
    while (Number(list[index].dt_txt.slice(8, 10)) === moment().day()) {
      index++;
    }

    array.push(list.slice(0, index));

    for (index; index < list.length; index += 8) {
      array.push(list.slice(index, index + 8));
    }

    for (let i = 0; i < array.length; i++) {
      const temp = array[i].map(({ main }) => {
        return Math.round(main.temp);
      });
      object[i] = {
        ...object[i],
        tempMax: Math.max(...temp),
        tempMin: Math.min(...temp),
        bottomText: `${translateDayOfWeek(
          moment(array[i][0].dt_txt.slice(0, 10)).day()
        )}`,
        icon: (array[i][0].weather[0].icon.slice(0, 2) + "d") as TWeatherIcon,
      };
    }

    return object;
  };

  useEffect(() => {
    mountedForecastWeather();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.todayWeatherContainer}>
        {getForecastWeather &&
          getForecastWeather.cod === "200" &&
          getForecastWeather.list
            .slice(0, 5)
            .map(({ weather, main, dt_txt }) => (
              <WeatherTab
                image={weather[0].icon}
                tempTop={`${Math.round(main.temp)}°`}
                bottomText={dt_txt.slice(11, 16)}
                key={dt_txt}
              />
            ))}
      </div>
      <div className={classes.forecastWeatherContainer}>
        {getForecastWeather &&
          getForecastWeather.cod === "200" &&
          forecastWeather(getForecastWeather.list).map(
            ({ tempMax, tempMin, bottomText, icon }) => (
              <WeatherTab
                image={icon}
                tempBottom={`${tempMax}° / ${tempMin}°`}
                bottomText={bottomText}
                key={bottomText}
              />
            )
          )}
      </div>
    </div>
  );
};

export default ForecastWeatherBody;
