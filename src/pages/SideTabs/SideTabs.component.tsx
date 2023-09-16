import { Box, Grid } from "@mui/material";

import { ISideTabsProps } from "./SideTabs.types";
import { useStyles } from "./SideTabs.styles";

const SideTabs = ({
  sideTabsVisible,
  children,
  setSelectedCameras,
}: ISideTabsProps) => {
  const classes = useStyles();

  const choiceCamera = (camera: 0 | 1 | 2 | 3) => {
    let cameras = {
      0: false,
      1: false,
      2: false,
      3: false,
    };
    cameras[camera] = true;
    setSelectedCameras(cameras);
  };

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
              <span
                className={classes.selectCamera}
                onDoubleClick={() => {
                  choiceCamera(0);
                }}
              ></span>
              <span
                className={classes.selectCamera}
                onDoubleClick={() => {
                  choiceCamera(2);
                }}
              ></span>
            </Box>
            {children[1]}
          </Grid>
          <Grid xs={1} item>
            <Box>
              <Box>
                <span
                  className={classes.selectCamera}
                  onDoubleClick={() => {
                    choiceCamera(1);
                  }}
                ></span>
                <span
                  className={classes.selectCamera}
                  onDoubleClick={() => {
                    choiceCamera(3);
                  }}
                ></span>
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
