import { useEffect, useState } from "react";

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

const defaultCamerasValue = {
  0: false,
  1: false,
  2: false,
  3: false,
};

const dupa = {
  0: false,
  1: false,
  2: false,
  3: false,
};

let cameraStep = -1;
let cameraIsSelected = false;

const HomePage = ({}: IHomePageProps) => {
  const classes = useStyles();

  const [selectedCameras, setSelectedCameras] = useState(defaultCamerasValue);

  const selectNextIndicatedCamera = () => {
    const arrayOfCameras = Object.entries(dupa);

    let currentPositionCameras = arrayOfCameras
      .slice(cameraStep, arrayOfCameras.length)
      .concat(arrayOfCameras.slice(0, cameraStep));

    let dict = { ...defaultCamerasValue };

    for (let i = 1; i < currentPositionCameras.length; i++) {
      if (currentPositionCameras[i][1]) {
        dict[Number(currentPositionCameras[i][0]) as 0 | 1 | 2 | 3] = true;

        setSelectedCameras(dict);
        return Number(currentPositionCameras[i][0]);
      }
    }
    if (currentPositionCameras[0][1]) {
      dict[Number(currentPositionCameras[0][0]) as 0 | 1 | 2 | 3] = true;

      setSelectedCameras(dict);
      return Number(currentPositionCameras[0][0]);
    }
    setSelectedCameras(defaultCamerasValue);
    return -1;
  };

  const checkSelectedCameras = () => {
    let isSelected = false;
    Object.values(selectedCameras).map((e) => {
      if (e) isSelected = true;
      return null;
    });
    return isSelected;
  };

  useEffect(() => {
    cameraIsSelected = checkSelectedCameras();
  }, [selectedCameras]);

  const [sideTabsVisible, setSideTabsVisible] = useState(false);

  const onMouseMoveSetSideTabsVisible = () => {
    clearAllSetInterval();
    setSideTabsVisible(true);

    window.setTimeout(() => {
      if (!cameraIsSelected) {
        window.setInterval(() => {
          cameraStep = selectNextIndicatedCamera();
        }, 6000);
      }

      setSideTabsVisible(false);
    }, 6000);

    window.setTimeout(() => {
      onMouseMoveSetSideTabsVisible();
      setSelectedCameras(defaultCamerasValue);
    }, 180000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMoveSetSideTabsVisible);

    return () => {
      window.removeEventListener("mousemove", onMouseMoveSetSideTabsVisible);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Iframe
        title="camera1"
        src={`${config.iframeFront}0`}
        className={`${classes.camera0} ${
          selectedCameras["0"]
            ? classes.camera0FullWindow
            : classes.camera0SmallWindow
        }`}
        setSelectedCameras={setSelectedCameras}
      />
      <Iframe
        title="camera2"
        src={`${config.iframeFront}1`}
        className={`${classes.camera1} ${
          selectedCameras["1"]
            ? classes.camera1FullWindow
            : classes.camera1SmallWindow
        }`}
        setSelectedCameras={setSelectedCameras}
      />
      <Iframe
        title="camera3"
        src={`${config.iframeFront}2`}
        className={`${classes.camera2} ${
          selectedCameras["2"]
            ? classes.camera2FullWindow
            : classes.camera2SmallWindow
        }`}
        setSelectedCameras={setSelectedCameras}
      />
      <Iframe
        title="camera4"
        src={`${config.iframeFront}3`}
        className={`${classes.camera3} ${
          selectedCameras["3"]
            ? classes.camera3FullWindow
            : classes.camera3SmallWindow
        }`}
        setSelectedCameras={setSelectedCameras}
      />
      <SideTabs
        sideTabsVisible={sideTabsVisible}
        setSelectedCameras={setSelectedCameras}
      >
        <TabRight>
          <TabItem>
            <TabItemIcon img={sunIcon} title={`Słonecznie ${cameraStep}°`} />
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
    </div>
  );
};

export default HomePage;
