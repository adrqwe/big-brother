import { useEffect, useRef, useState } from "react";

import { ITabItemProps } from "./TabItem.types";
import { useStyles } from "./TabItem.styles";

const TabItem = ({ className, children, onTabExtended }: ITabItemProps) => {
  const classes = useStyles();
  const [slide, setSlide] = useState("none");

  useEffect(() => {
    if (slide !== "none") {
      onTabExtended();
    }
  }, [slide]);

  const spanTab = useRef<HTMLSpanElement>(null);

  return (
    <span className={`${classes.tab} ${slide} tab`} ref={spanTab}>
      <div className={classes.tabChild}>
        <div
          className={classes.tabIcon}
          onClick={(e) => {
            if (slide === classes.slideOutLeft) {
              setSlide(classes.slideLeft);
            } else if (e.clientX < 250) {
              setSlide(classes.slideOutLeft);
            } else if (slide === classes.slideOutRight) {
              setSlide(classes.slideRight);
            } else if (e.clientX > 700) {
              setSlide(classes.slideOutRight);
            }
          }}
        >
          {children[0]}
        </div>
        <div className={classes.item}>{children[1]}</div>
      </div>
    </span>
  );
};

export default TabItem;
