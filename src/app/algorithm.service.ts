import {HttpClient} from "@angular/common/http";
import {ALGORITHMS_URL, backendServer} from "./constants";
import {AlgorithmModel} from "./algorithm.model";
import {Injectable} from "@angular/core";
import {ResultModel} from "./result.model";

@Injectable()
export class AlgorithmService {
  constructor(private httpClient: HttpClient) {
  }

  getAlgorithms() {
    return this.httpClient.get<AlgorithmModel[]>(ALGORITHMS_URL);
  }

  getResult(fraction: number, precision: number, url: string) {
    return this.httpClient.post<ResultModel>(backendServer + '/' + url, {decimal_fraction: fraction, precision})
  }
}
