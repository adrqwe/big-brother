import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  iframe: {
    margin: 0,
    border: "none",
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
  gridItem: {
    position: "absolute",
    width: "50%",
    height: "50%",
  },
  catchDoubleClick: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
});
