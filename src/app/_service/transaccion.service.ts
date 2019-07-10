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

    realizarDeposito(cuentaDestino: string,monto:string,tipo:string="1"){
        let body= `{"AccountNumber":"${cuentaDestino}","Amount":"${monto}","Movement":"${tipo}"}`;
        let sbody = JSON.parse(body);
        let access_token = JSON.parse(sessionStorage.getItem("access_token")).token;
		return this.http.post(`${this.url}/transactions/transaction`, sbody,{
        headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
    }
    realizarRetiro(cuentaOrigen: string,monto:string,tipo:string="2"){
        let body= `{"AccountNumber":"${cuentaOrigen}","Amount":"${monto}","Movement":"${tipo}"}`;
        let sbody = JSON.parse(body);
        let access_token = JSON.parse(sessionStorage.getItem("access_token")).token;
		return this.http.post(`${this.url}/transactions/transaction`, sbody,{
        headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
    }

}