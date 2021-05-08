import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

//Importamos los componentes
import { LogginComponent } from './Componentes/loggin/loggin.component';
import { HomeComponent } from './Componentes/home/home.component';

const app_routes:Routes = [
    {path: '', component: LogginComponent},
    {path: 'loggin', component: LogginComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: LogginComponent}
];

//Exportamos el modulo
export const app_routing_providers: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(app_routes);

