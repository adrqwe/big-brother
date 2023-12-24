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
import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";
import SettingTabBody from "./components/SettingTabBody";

const sunIcon = require("../../utils/sun.png");
const settingGear = require("../../utils/settingGear.png");

const defaultCamerasValue = {
  0: false,
  1: false,
  2: false,
  3: false,
};

let cameraStep = -1;
let cameraIsSelected = false;
let moveDetectionIsActive = false;

let currentSelectedCameras: TSelectedCamerasSuccessPayload = {
  0: false,
  1: false,
  2: false,
  3: false,
};

const HomePage = ({
  getSelectedCameras,
  getMoveDetectionSetting,
  mountedSelectedCameras,
}: IHomePageProps) => {
  const classes = useStyles();

  useEffect(() => {
    mountedSelectedCameras();
    onMouseMoveSetSideTabsVisible();
  }, []);

  useEffect(() => {
    moveDetectionIsActive = getMoveDetectionSetting;
  }, [getMoveDetectionSetting]);

  useEffect(() => {
    currentSelectedCameras = getSelectedCameras;
  }, [getSelectedCameras]);

  const [selectedCameras, setSelectedCameras] = useState(defaultCamerasValue);

  const selectNextIndicatedCamera = () => {
    const arrayOfCameras = Object.entries(currentSelectedCameras);

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
      if (!cameraIsSelected && moveDetectionIsActive) {
        window.setInterval(() => {
          mountedSelectedCameras();
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
            <div>xd</div>
          </TabItem>
          <TabItem>
            <TabItemIcon img={settingGear} title="Ustawienia" />
            <SettingTabBody />
          </TabItem>
        </TabRight>
        <TabLeft>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
            <div>xd</div>
          </TabItem>
          <TabItem>
            <TabItemIcon img={sunIcon} title="Słonecznie 21°" />
            <div>xd</div>
          </TabItem>
        </TabLeft>
      </SideTabs>
    </div>
  );
};

export default HomePage;
