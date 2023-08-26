import { Grid } from "@mui/material";
import { useRef } from "react";

import { IIframe } from "./Iframe.types";
import { useStyles } from "./Iframe.styles";

const Iframe = ({ src, title, height }: IIframe) => {
  const classes = useStyles();

  const iframeElement = useRef<HTMLIFrameElement>(null);

  return (
    <Grid
      item
      xs={1}
      className={classes.gridItem}
      sx={{ height: `${height}px` }}
    >
      <iframe
        scrolling="no"
        src={src}
        title={title}
        height={height}
        className={classes.iframe}
        ref={iframeElement}
      ></iframe>
    </Grid>
  );
};

export default Iframe;
