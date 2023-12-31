import { FormControlLabel, Switch } from "@mui/material";
import { useEffect } from "react";

import { useStyles } from "./SettingTabBody.styles";
import { ISettingTabBodyProps } from "./SettingTabBody.types";

const SettingTabBody = ({
  getMoveDetectionSetting,
  setMoveDetectionSetting,
}: ISettingTabBodyProps) => {
  const classes = useStyles();

  useEffect(() => {
    setMoveDetectionSetting(
      Boolean(localStorage.getItem("moveDetectionSwitch"))
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
    </div>
  );
};

export default SettingTabBody;
