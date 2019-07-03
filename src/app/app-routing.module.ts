import { ConsultaComponent } from './consulta/consulta.component';
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
    path:'consulta',component:ConsultaComponent,canActivate:[LoginGuard]
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
