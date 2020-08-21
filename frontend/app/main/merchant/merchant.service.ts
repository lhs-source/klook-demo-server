import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Merchant } from './merchant.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {

  }

  get_all_merchants() {
    let request = {
      url: "/api/merchant"
    };
    return this.http.get<Merchant[]>(request.url).pipe(
      catchError(this.handleError<Merchant[]>('get_all_merchants', []))
    );
  }
  insert_merchant(merchant: any) {
    let request = {
      url: "/api/merchant"
    };
    let jsonstr = JSON.stringify(merchant);
    return this.http.post(request.url, jsonstr, this.httpOptions).pipe(
      tap((new_merchant: Merchant) => console.log(`insert_merchant w/ name = ${new_merchant.name}`)),
      catchError(this.handleError<Merchant>('insert_merchant'))
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
