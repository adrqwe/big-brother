import { FormControlLabel, Switch } from "@mui/material";
import { useEffect } from "react";

import { useStyles } from "./SettingTabBody.styles";
import { ISettingTabBodyProps } from "./SettingTabBody.types";

const SettingTabBody = ({
  getMoveDetectionSetting,
  getMovingObjectsSetting,
  setMoveDetectionSetting,
  setMovingObjectsSetting,
}: ISettingTabBodyProps) => {
  const classes = useStyles();

  useEffect(() => {
    setMoveDetectionSetting(
      Boolean(localStorage.getItem("moveDetectionSwitch"))
    );
    setMovingObjectsSetting(
      Boolean(localStorage.getItem("movingObjectsSwitch"))
    );
  }, []);

  const moveDetectionSwitchOnChange = () => {
    if (!getMoveDetectionSetting) {
      localStorage.setItem("moveDetectionSwitch", "1");
    } else {
      localStorage.setItem("moveDetectionSwitch", "");
    }
    setMoveDetectionSetting(!getMoveDetectionSetting);
  };

  const movingObjectsSwitchOnChange = () => {
    if (!getMovingObjectsSetting) {
      localStorage.setItem("movingObjectsSwitch", "1");
    } else {
      localStorage.setItem("movingObjectsSwitch", "");
    }
    setMovingObjectsSetting(!getMovingObjectsSetting);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={getMoveDetectionSetting}
            onChange={moveDetectionSwitchOnChange}
          />
        }
        label="Auto-kamera"
      />
      <FormControlLabel
        control={
          <Switch
            checked={getMovingObjectsSetting}
            onChange={movingObjectsSwitchOnChange}
          />
        }
        label="Pokazuj wykryty ruch"
      />
    </div>
  );
};

export default SettingTabBody;
