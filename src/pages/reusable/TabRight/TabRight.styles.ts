import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  optionSliderRight: { right: 0, transform: "translateX(calc(100% - 220px))" },
  optionSlider: {
    position: "fixed",
    top: 0,
    "& span.tab": {
      borderRadius: "40px 0 0 40px",
    },
  },
});
