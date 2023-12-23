import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";

class SelectCameraService {
  private static getSelectCamerasUrl() {
    return `${config.defaultAPI}selected/cameras`;
  }

  private cancelTokenProducts?: CancelTokenSource;

  public getSelectedCameras(): Promise<TSelectedCamerasSuccessPayload> {
    return new Promise<TSelectedCamerasSuccessPayload>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(SelectCameraService.getSelectCamerasUrl(), {
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
export default new SelectCameraService();
