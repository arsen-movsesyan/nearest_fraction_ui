import {HttpClient} from "@angular/common/http";
import {ALGORITHMS_URL, backendServer} from "../constants";
import {AlgorithmModel} from "./algorithm.model";
import {Injectable} from "@angular/core";
import {ResultModel} from "./result.model";

@Injectable()
export class AlgorithmService {
  constructor(private httpClient: HttpClient) {
  }

  getPrecisions() {
    const ret = [];
    for (let i = 2; i < 11; i++) {
      ret.push({
        value: i, precision: Math.pow(2, i)
      });
    }
    return ret;
  }

  getResult(fraction: number, precision: number) {
    return this.httpClient.post<ResultModel>(`${backendServer}/to-binary`, {decimal_fraction: fraction, precision});
  }
}
