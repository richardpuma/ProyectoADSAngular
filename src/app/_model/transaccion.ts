export class Transaccion{
	cuentaOrigen:string;
	cuentaDestino:string;
	monto:string;

	constructor(cuentaOrigen1:string,cuentaDestino1:string,monto1:string){
		this.cuentaOrigen=cuentaOrigen1;
		this.cuentaDestino=cuentaDestino1;
		this.monto=monto1;
	}
}