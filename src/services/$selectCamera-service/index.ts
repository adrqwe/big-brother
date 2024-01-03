import axios, { CancelTokenSource } from "axios";

import config from "../../config";
import { TSelectedCamerasSuccessPayload } from "../../models/selectCamera/types";

class SelectCameraService {
  private static getSelectCamerasUrl() {
    return `${config.defaultAPI}selected/cameras`;
  }
  private static getMovingObjectsUrl() {
    return `${config.defaultAPI}moving/object/select`;
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

  public getMovingObjects(bool: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.cancelTokenProducts = axios.CancelToken.source();
      axios
        .get(SelectCameraService.getMovingObjectsUrl(), {
          cancelToken: this.cancelTokenProducts.token,
          params: {
            selectMovingObjects: bool,
          },
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
