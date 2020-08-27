import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  
  constructor(private http : HttpClient) { }

  get_qrcode(input) {
    let request = {
      url: "/api/qr"
    }
    // let input_data = JSON.stringify(input);
    console.log(input);
    return this.http.post(request.url, {data :input} , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept':'image/png',
        Authorization: 'my-auth-token'
      }), 
      responseType: 'text'
    });
  }

}
