import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  optionSliderLeft: {
    left: 0,
    direction: "rtl",
    transform: "translateX(calc(-100% + 220px))",
  },
  optionSlider: {
    position: "fixed",
    top: 0,
    "& span.tab": {
      borderRadius: "0 40px 40px 0",
      justifyContent: "flex-end",
    },
  },
});
