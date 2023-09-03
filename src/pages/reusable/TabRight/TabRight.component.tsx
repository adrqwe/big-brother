import { Box } from "@mui/material";

import { ITabRightProps } from "./TabRight.types";
import { useStyles } from "./TabRight.styles";

const TabRight = ({ className, children }: ITabRightProps) => {
  const classes = useStyles();
  return (
    <Box className={`${classes.optionSliderRight} ${classes.optionSlider}`}>
      {children.map((element: JSX.Element, index: number) => {
        return element;
      })}
    </Box>
  );
};

export default TabRight;
