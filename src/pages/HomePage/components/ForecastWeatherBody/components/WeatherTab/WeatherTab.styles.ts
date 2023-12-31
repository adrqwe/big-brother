import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  weatherTabContainer: {
    display: "flex",
    flexDirection: "column",
  },
  imageSpan: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  bottomTextSpan: { height: "20%", fontSize: "100%", textAlign: "center" },
  tempSpanTop: {
    position: "absolute",
    top: 5,
    right: 0,
  },
  tempSpanBottom: {
    position: "absolute",
    bottom: 0,
  },
});
