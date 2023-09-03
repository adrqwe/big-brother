import { Box, Grid } from "@mui/material";

import { ISideTabsProps } from "./SideTabs.types";
import { useStyles } from "./SideTabs.styles";

const SideTabs = ({ sideTabsVisible, children }: ISideTabsProps) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={`${!sideTabsVisible && classes.sideTabsInvisible} ${
        classes.sideTabs
      }`}
      columns={2}
    >
      {sideTabsVisible && (
        <>
          <Grid xs={1} item>
            <Box>
              <span className={classes.selectCamera}></span>
              <span className={classes.selectCamera}></span>
            </Box>
            {children[1]}
          </Grid>
          <Grid xs={1} item>
            <Box>
              <Box>
                <span className={classes.selectCamera}></span>
                <span className={classes.selectCamera}></span>
              </Box>
              {children[0]}
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default SideTabs;
