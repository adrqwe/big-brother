import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "600px",
    height: "100%",
  },
  todayWeatherContainer: {
    height: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-around",
  },
  forecastWeatherContainer: {
    height: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid white",
  },
});
