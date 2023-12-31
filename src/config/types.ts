export interface IConfig {
  iframeFront: string | undefined;
  defaultAPI: string | undefined;
  defaultPartner: number;
  activeLanguage: "PL" | "EN";
  weatherApi: string;
  weatherApiKey: string | undefined;
}
