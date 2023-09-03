import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  sideTabs: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  sideTabsInvisible: {
    backgroundColor: "transparent",
    cursor: "none",
  },

  selectCamera: {
    display: "block",
    height: "50vh",
  },
  optionSliderLeft: { left: 0 },
  optionSliderRight: { right: 0 },
  optionSlider: {
    position: "fixed",
    zIndex: 1,
    top: 0,
  },
});
