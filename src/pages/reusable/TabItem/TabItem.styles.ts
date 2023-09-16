import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  tab: {
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "220px",
    minWidth: "220px",
    margin: "40px 0",
    display: "flex",
    position: "relative",
    zIndex: 10,
  },
  tabChild: {
    height: "180px",
    minWidth: "180px",
    margin: "20px 20px",
    display: "flex",
  },
  tabIcon: {
    width: "180px",
    aspectRatio: "1 / 1",
    cursor: "pointer",
  },
  item: {
    margin: "0 22px",
    color: "white",
    maxWidth: document.documentElement.clientWidth / 2 - 300,
    overflowWrap: "break-word",
  },
  "@keyframes slideLeft": {
    from: { transform: "translateX(calc(100% - 220px))" },
    to: { transform: "translateX(0px)" },
  },
  "@keyframes slideLeftReverse": {
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(calc(100% - 220px))" },
  },
  slideLeft: {
    animationName: "$slideLeft",
    animationDuration: "0.5s",
    animationFillMode: "backwards",
  },
  slideOutLeft: {
    animationName: "$slideLeftReverse",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
  "@keyframes slideRight": {
    from: { transform: "translateX(calc(-100% + 220px))" },
    to: { transform: "translateX(0px)" },
  },
  "@keyframes slideRightReverse": {
    from: { transform: "translateX(0px)" },
    to: { transform: "translateX(calc(-100% + 220px))" },
  },
  slideRight: {
    animationName: "$slideRight",
    animationDuration: "0.5s",
    animationFillMode: "backwards",
  },
  slideOutRight: {
    animationName: "$slideRightReverse",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
});
