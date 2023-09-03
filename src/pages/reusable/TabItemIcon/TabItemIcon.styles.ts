import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  title: {
    bottom: 0,
    position: "absolute",
    textAlign: "center",
    width: "100%",
    color: "white",
    fontSize: "20px",
  },
  icon: {
    width: "150px",
    aspectRatio: "1/1",
    margin: "0 15px",
  },
});
