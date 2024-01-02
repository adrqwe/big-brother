import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    display: "flex",
    width: "500px",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridColumnGap: "6px",
    gridRowGap: "6px",
    gridAutoFlow: "column",
  },
  span: {
    direction: "ltr",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
  },
});
