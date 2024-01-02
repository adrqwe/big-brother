export interface ITabItem {
  className?: string;
  children: JSX.Element[];
  onTabExtended: () => void;
}
export type ITabItemProps = ITabItem;
