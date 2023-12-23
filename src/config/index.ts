import { api } from "./api";
import { IConfig } from "./types";

const config: IConfig = {
  iframeFront: api.iframeFront,
  defaultAPI: api.defaultAPI,
  defaultPartner: 1,
  activeLanguage: "PL",
};
export default config;
