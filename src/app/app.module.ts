//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { app_routing_providers, routing } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { LogginComponent } from './Componentes/loggin/loggin.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PrincipalComponent } from './Componentes/home/principal/principal.component';
import { LateralComponent } from './Componentes/home/lateral/lateral.component';

@NgModule({
	declarations: [
    AppComponent,
	LogginComponent,
	HomeComponent,
	PrincipalComponent,
	LateralComponent
	
  	],
	imports: [
	BrowserModule,
	FormsModule,
	HttpClientModule,
	routing

  	],
  	providers: [
		app_routing_providers
	],
  	bootstrap: [AppComponent]
})
export class AppModule { }
