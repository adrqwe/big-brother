import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  optionSliderLeft: { left: 0, direction: "rtl" },
  optionSlider: {
    position: "fixed",
    zIndex: 1,
    top: 0,
    "& span": {
      borderRadius: "0 40px 40px 0",
      justifyContent: "flex-end",
    },
    "& span.none": {
      transform: "translateX(calc(-100% + 220px))",
    },
  },
});
