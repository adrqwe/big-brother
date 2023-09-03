import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.styles";
import Iframe from "../reusable/Iframe";
import config from "../../config";
import SideTabs from "../SideTabs/SideTabs.component";
import clearAllSetInterval from "../reusable/ClearAllSetInterval";
import TabItem from "../reusable/TabItem";
import TabItemIcon from "../reusable/TabItemIcon";
import TabLeft from "../reusable/TabLeft";
import TabRight from "../reusable/TabRight";

const sunIcon = require("../../utils/sun.png");

const HomePage = ({}: IHomePageProps) => {
  const classes = useStyles();

  const [sideTabsVisible, setSideTabsVisible] = useState(false);

  const onMouseMoveSetSideTabsVisible = () => {
    clearAllSetInterval();
    setSideTabsVisible(true);
    window.setInterval(() => {
      setSideTabsVisible(false);
    }, 6000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMoveSetSideTabsVisible);

    return () => {
      window.removeEventListener("mousemove", onMouseMoveSetSideTabsVisible);
    };
  }, []);

  const [pageHeight, setPageHeight] = useState(
    document.documentElement.clientHeight
  );
  const changeHeight = () => {
    setPageHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", changeHeight);

    return () => {
      window.removeEventListener("resize", changeHeight);
    };
  }, []);

  return (
    <Grid className={classes.container} container columns={2}>
      <Iframe
        title="camera1"
        src={`${config.iframeFront}0`}
        height={pageHeight / 2}
      />
      <Iframe
        title="camera2"
        src={`${config.iframeFront}1`}
        height={pageHeight / 2}
      />
      <Iframe
        title="camera3"
        src={`${config.iframeFront}2`}
        height={pageHeight / 2}
      />
      <Iframe
        title="camera4"
        src={`${config.iframeFront}3`}
        height={pageHeight / 2}
      />
      <SideTabs sideTabsVisible={sideTabsVisible}>
        <TabRight>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
          </TabItem>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
          </TabItem>
        </TabRight>
        <TabLeft>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
          </TabItem>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
          </TabItem>
        </TabLeft>
      </SideTabs>
    </Grid>
  );
};

export default HomePage;
