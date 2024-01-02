import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import { TWhoIsInHomeSuccessPayload } from "../../models/whoIsInHome/types";

class WhoIsInHomeService {
  private static getWhoIsInHomeUrl() {
    return `${config.defaultAPI}who/is/in/home`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getWhoIsInHome(): Promise<TWhoIsInHomeSuccessPayload> {
    return new Promise<TWhoIsInHomeSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(WhoIsInHomeService.getWhoIsInHomeUrl(), {
          cancelToken: this.cancelTokenProducts.token,
        })
        .then((data) => resolve(data.data))
        .catch((error) => reject(error));
    });
  }

  public cancelProducts() {
    if (this.cancelTokenProducts) {
      this.cancelTokenProducts.cancel();
      this.cancelTokenProducts = undefined;
    }
  }
}
export default new WhoIsInHomeService();
