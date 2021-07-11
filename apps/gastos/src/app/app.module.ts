import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './pages/login/login.module';
import { UsuarioModule } from './pages/usuario/usuario.module';
import { EventoModule } from './pages/evento/evento.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,

    LoginModule,
    UsuarioModule,
    EventoModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
