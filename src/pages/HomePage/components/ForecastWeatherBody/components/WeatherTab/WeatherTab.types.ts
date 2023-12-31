import { TWeatherIcon } from "../../../../../../models/weatherApi/types";

export interface IWeatherTab {
  image: TWeatherIcon;
  tempTop?: string;
  tempBottom?: string;
  bottomText: string;
}

export type IWeatherTabProps = IWeatherTab;
