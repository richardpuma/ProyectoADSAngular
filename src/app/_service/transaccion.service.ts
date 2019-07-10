import { HOST } from './var.constant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Injectable()
export class TransaccionService {
    url: string = HOST;
    
    constructor(private http: HttpClient) {
    }

    realizarTransaccion(cuentaOrigen: string,cuentaDestino:string,monto:string) {
		let body= `{"FromAccountNumber":"${cuentaOrigen}","ToAccountNumber":"${cuentaDestino}","Amount":"${monto}"}`;
		let sbody = JSON.parse(body);
		let access_token = JSON.parse(sessionStorage.getItem("access_token")).token;
		return this.http.post(`${this.url}/transactions/transfer`, sbody,{
            headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
        });
    }

}