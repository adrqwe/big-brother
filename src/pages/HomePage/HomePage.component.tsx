import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { IHomePageProps } from "./HomePage.types";
import { useStyles } from "./HomePage.styles";
import Iframe from "../reusable/Iframe";
import config from "../../config";

const HomePage = ({}: IHomePageProps) => {
  const classes = useStyles();

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
    </Grid>
  );
};

export default HomePage;
