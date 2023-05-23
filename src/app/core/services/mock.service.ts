import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ITradeInterface} from "../interfaces/trade.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class MockService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<ITradeInterface[]> {
    return this.http.get<ITradeInterface[]>(this.url + 'app/core/mockData/trades.json');
  }
}
