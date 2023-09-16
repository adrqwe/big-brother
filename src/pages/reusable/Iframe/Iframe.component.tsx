import { useRef } from "react";

import { IIframe } from "./Iframe.types";
import { useStyles } from "./Iframe.styles";
import clearAllSetInterval from "../ClearAllSetInterval";

const Iframe = ({ src, title, className, setSelectedCameras }: IIframe) => {
  const classes = useStyles();

  const iframeElement = useRef<HTMLIFrameElement>(null);

  return (
    <div className={`${classes.gridItem} ${className}`}>
      <iframe
        scrolling="no"
        src={src}
        title={title}
        className={classes.iframe}
        ref={iframeElement}
      ></iframe>
      <span
        className={classes.catchDoubleClick}
        onDoubleClick={() => {
          clearAllSetInterval();
          setSelectedCameras({
            0: false,
            1: false,
            2: false,
            3: false,
          });
        }}
      ></span>
    </div>
  );
};

export default Iframe;
