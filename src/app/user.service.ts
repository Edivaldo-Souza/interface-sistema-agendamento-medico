import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "https://localhost:7231/api/"

  constructor(private http: HttpClient) { 

  }

  login(body:any): Observable<any>{
    const data = this.http.post<any>(this.url+"Auth/login",body);
    return data ?? {};
  }

  submitSubscrition(body:any): Observable<any>{
    const data = this.http.post<any>(this.url+"User",body);
    return data ?? {}; 
    //console.log(`Nome:${name}, Email:${email}, CPF:${cpf}, Senha:${password}, Vocação:${vocation}`)
  }
}
