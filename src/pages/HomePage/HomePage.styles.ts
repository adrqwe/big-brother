import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  },
  gridItem: {
    backgroundColor: "red",
  },
  "@keyframes resizeToSmall": {
    from: { width: "100%", height: "100%", zIndex: 1 },
    "99%": { zIndex: 1 },
    to: { width: "50%", height: "50%", zIndex: 0 },
  },
  "@keyframes fullWindow": {
    from: { width: "50%", height: "50%" },
    to: { width: "100%", height: "100%" },
  },
  camera0: {
    top: 0,
    left: 0,
  },
  camera1: {
    top: 0,
    right: 0,
  },
  camera2: {
    bottom: 0,
    left: 0,
  },
  camera3: {
    bottom: 0,
    right: 0,
  },
  camera0SmallWindow: {
    animationName: "$resizeToSmall",
    animationDuration: "0.2s",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-out",
  },
  camera1SmallWindow: {
    animationName: "$resizeToSmall",
    animationDuration: "0.2s",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-out",
  },
  camera2SmallWindow: {
    animationName: "$resizeToSmall",
    animationDuration: "0.2s",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-out",
  },
  camera3SmallWindow: {
    animationName: "$resizeToSmall",
    animationDuration: "0.2s",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-out",
  },
  camera0FullWindow: {
    zIndex: 1,
    animationName: "$fullWindow",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
  camera1FullWindow: {
    zIndex: 1,
    animationName: "$fullWindow",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
  camera2FullWindow: {
    zIndex: 1,
    animationName: "$fullWindow",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
  camera3FullWindow: {
    zIndex: 1,
    animationName: "$fullWindow",
    animationDuration: "0.5s",
    animationFillMode: "forwards",
  },
});
