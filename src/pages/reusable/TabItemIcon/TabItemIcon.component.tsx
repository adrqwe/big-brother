import { Typography } from "@mui/material";

import { ITabItemIconProps } from "./TabItemIcon.types";
import { useStyles } from "./TabItemIcon.styles";

const TabItemIcon = ({ img, title }: ITabItemIconProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.icon} src={img} alt="Ikona" draggable="false" />
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
};

export default TabItemIcon;
