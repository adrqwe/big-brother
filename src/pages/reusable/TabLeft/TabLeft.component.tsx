import { Box } from "@mui/material";

import { ITabLeftProps } from "./TabLeft.types";
import { useStyles } from "./TabLeft.styles";

const TabLeft = ({ className, children }: ITabLeftProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.optionSliderLeft} ${classes.optionSlider}`}>
      {children.map((element: JSX.Element, index: number) => {
        return element;
      })}
    </div>
  );
};

export default TabLeft;
