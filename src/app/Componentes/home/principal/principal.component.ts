import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LateralComponent } from '../lateral/lateral.component';

@Component({
	selector: 'app-principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


	constructor() {

	}
	
	ngOnInit(): void {
		
	}

	public add_user(nombre:string, apellidos:string, correo:string, edad:number, pais:string, url:string) {
		$(document).ready(() => {
			let box_container = $('#box-container');

			let plantilla = `
				<div class="card">
					<div class="imagen">
						<img src=${url} alt="Ejemplo"/>
					</div>

					<div class="info">
						<h4>Nombre: <span>${nombre}</span></h4>
						<h4>Apellidos: <span>${apellidos}</span></h4>
						<h4>Correo: <span>${correo}</span></h4>
						<h4>Edad: <span>${edad}</span></h4>
						<h4>Pais: <span>${pais}</span></h4>
					</div>

				</div>
			`;

			box_container.append(plantilla);

		});
	}

}
