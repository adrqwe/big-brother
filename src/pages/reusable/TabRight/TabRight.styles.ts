import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  optionSliderRight: { right: 0 },
  optionSlider: {
    position: "fixed",
    zIndex: 1,
    top: 0,
    "& span": {
      borderRadius: "40px 0 0 40px",
    },
    "& span.none": {
      transform: "translateX(calc(100% - 220px))",
    },
  },
});
