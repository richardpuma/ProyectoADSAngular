
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComboBoxDirective } from './_directive/combobox.directive';
import { LoginService } from './_service/login.service';
import { TransaccionService } from './_service/transaccion.service';
import { LoginGuard } from './_service/login-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { DepositoComponent } from './deposito/deposito.component';
import { RetiroComponent } from './retiro/retiro.component';
import { ConsultaCuentaComponent } from './consulta-cuenta/consulta-cuenta.component';
import { ConsultaMovimientoComponent } from './consulta-movimiento/consulta-movimiento.component';
import { ConsultaClienteComponent } from './consulta-cliente/consulta-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    FooterComponent,
    HeaderComponent,
    ComboBoxDirective,
    TransaccionComponent,
    DepositoComponent,
    RetiroComponent,
    ConsultaCuentaComponent,
    ConsultaMovimientoComponent,
    ConsultaClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},LoginService,TransaccionService, LoginGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
