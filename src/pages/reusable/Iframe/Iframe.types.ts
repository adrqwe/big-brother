export interface IIframe {
  title: string;
  src: string;
  className: string;
  setSelectedCameras: React.Dispatch<
    React.SetStateAction<{
      0: boolean;
      1: boolean;
      2: boolean;
      3: boolean;
    }>
  >;
}
export type IIframeProps = IIframe;
