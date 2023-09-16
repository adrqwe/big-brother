export interface ISideTabsFrom {
  sideTabsVisible: boolean;
  children: JSX.Element[];
  setSelectedCameras: React.Dispatch<
    React.SetStateAction<{
      0: boolean;
      1: boolean;
      2: boolean;
      3: boolean;
    }>
  >;
}
export interface ISideTabsFromState {}
export interface ISideTabsFromDispatch {}
export type ISideTabsProps = ISideTabsFromState &
  ISideTabsFromDispatch &
  ISideTabsFrom;
