export interface ISideTabsFrom {
  sideTabsVisible: boolean;
  children: JSX.Element[];
}
export interface ISideTabsFromState {}
export interface ISideTabsFromDispatch {}
export type ISideTabsProps = ISideTabsFromState &
  ISideTabsFromDispatch &
  ISideTabsFrom;
