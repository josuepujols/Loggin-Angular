import { Component, OnInit, DoCheck } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';


@Component({
	selector: 'app-lateral',
	templateUrl: './lateral.component.html',
	styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit, DoCheck {
	
	public nombre:string;
	public apellidos:string;
	public correo:string;
	public edad:any;
	public pais:string;
	public url:string;
	
	public objeto_principal:PrincipalComponent;
	
	constructor() {
		this.objeto_principal = new PrincipalComponent();
	}
		
		
	ngOnInit(): void {
		
	}

	ngDoCheck() {

	}

}
