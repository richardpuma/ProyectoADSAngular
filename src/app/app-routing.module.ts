import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';
import { ConsultaMovimientoComponent } from './consulta-movimiento/consulta-movimiento.component';
import { ConsultaCuentaComponent } from './consulta-cuenta/consulta-cuenta.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DepositoComponent } from './deposito/deposito.component';
import { TransaccionComponent } from './transaccion/transaccion.component';

import { LoginGuard } from './_service/login-guard.service';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'principal',component:PrincipalComponent,canActivate:[LoginGuard]
  },
  {
    path:'transaccion',component:TransaccionComponent,canActivate:[LoginGuard]
  },
  {
    path:'deposito',component:DepositoComponent,canActivate:[LoginGuard]
  },
  {
    path:'retiro',component:RetiroComponent,canActivate:[LoginGuard]
  },
  {
    path:'consultaCliente',component:ConsultaClienteComponent,canActivate:[LoginGuard]
  },
  {
    path:'consultaCuenta',component:ConsultaCuentaComponent,canActivate:[LoginGuard]
  },
  {
    path:'consultaMovimiento',component:ConsultaMovimientoComponent,canActivate:[LoginGuard]
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
