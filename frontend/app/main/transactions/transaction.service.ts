import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Transaction } from './transactions.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private trs_init = [
    {
      type: "transactions",
      class: "백화점",
      merchant: "Central Department Store (Central Hat Yai)",
      point: -25000,
      curr: 676,
      country: "태국",
      date: new Date(2020, 9, 30, 14, 23, 0, 0),
      description: "포인트사용",
      taxfree: true,
      utu: false,
      save_point: 1250,
    }, {
      type: "transactions",
      class: "편의점",
      merchant: "Family mart",
      point: -4500,
      curr: 122,
      country: "태국",
      date: new Date(2020, 9, 30, 11, 30, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 45,
    }, {
      type: "transactions",
      class: "포인트충전",
      merchant: "KB국민카드 해피Nori카드 충전",
      point: 100000,
      curr: 0,
      country: "태국",
      date: new Date(2020, 9, 27, 21, 9, 0, 0),
      description: "포인트 일반충전",
      taxfree: false,
      utu: false,
      save_point: 0,
    }, {
      type: "transactions",
      class: "마트",
      merchant: "Big C (Thap Thiang)",
      point: -5500,
      curr: 145,
      country: "태국",
      date: new Date(2020, 9, 25, 13, 9, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 55,
    }, {
      type: "transactions",
      class: "식당",
      merchant: "MK Restaurants",
      point: -13500,
      curr: 365,
      country: "태국",
      date: new Date(2020, 9, 25, 12, 35, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 135,
    }, {
      type: "transactions",
      class: "포인트충전",
      merchant: "KB국민카드 포인트 자동충전",
      point: 50000,
      curr: 0,
      country: "태국",
      date: new Date(2020, 9, 25, 9, 45, 0, 0),
      description: "포인트 자동충전",
      taxfree: false,
      utu: false,
      save_point: 0,
    }, {
      type: "transactions",
      class: "식당",
      merchant: "EATHAI",
      point: -37000,
      curr: 1001,
      country: "태국",
      date: new Date(2020, 9, 25, 18, 20, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 370,
    }, {
      type: "transactions",
      class: "백화점",
      merchant: "Robinson",
      point: -38000,
      curr: 1028,
      country: "태국",
      date: new Date(2020, 9, 24, 17, 24, 0, 0),
      description: "포인트사용",
      taxfree: true,
      utu: false,
      save_point: 1900,
    }, {
      type: "transactions",
      class: "마트",
      merchant: "Tops daily mini supermarket",
      point: -19000,
      curr: 324,
      country: "태국",
      date: new Date(2020, 9, 24, 13, 15, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 600,
    }, {
      type: "transactions",
      class: "스포츠",
      merchant: "SuperSports",
      point: -12000,
      curr: 324,
      country: "태국",
      date: new Date(2020, 9, 23, 19, 20, 0, 0),
      description: "포인트사용",
      taxfree: true,
      utu: false,
      save_point: 600,
    }, {
      type: "transactions",
      class: "카페",
      merchant: "Segafredo Zanetti Espresso",
      point: -5000,
      curr: 135,
      country: "태국",
      date: new Date(2020, 9, 23, 18, 45, 0, 0),
      description: "포인트사용",
      taxfree: false,
      utu: true,
      save_point: 50,
    }, {
      type: "transactions",
      class: "포인트충전",
      merchant: "KB국민카드 해피Nori카드 충전",
      point: 100000,
      curr: 0,
      country: "태국",
      date: new Date(2020, 9, 20, 21, 0, 0, 0),
      description: "포인트 일반충전",
      taxfree: false,
      utu: false,
      save_point: 0,
    }, {
      type: "transactions",
      class: "포인트교환",
      merchant: "KB국민카드 포인트리 교환",
      point: 20000,
      curr: 0,
      country: "태국",
      date: new Date(2020, 9, 20, 20, 50, 0, 0),
      description: "포인트교환",
      taxfree: false,
      utu: false,
      save_point: 0,
    }
  ];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {

  }

  getAllTransactions() {
    let request = {
      url: "/api/transaction"
    };
    return this.http.get<Transaction[]>(request.url).pipe(
      catchError(this.handleError<Transaction[]>('get_all_merchants', []))
    );
  }

  reset() {
    let request = {
      url: "/api/transaction"
    };
    let headers = new HttpHeaders({
        "Content-Type": "application/json",
    });
    return this.http.delete(request.url, {headers:headers, responseType:'text'}).pipe(
      catchError(this.handleError<Transaction[]>('delete all', []))
    ).pipe(
      switchMap(res => {
        // console.log("delete all =",res);
        let headers = new HttpHeaders({
          "Content-Type": "application/json",
        });
        return this.http.post(request.url + '/all', JSON.stringify(this.trs_init), { headers: headers })
      })
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
