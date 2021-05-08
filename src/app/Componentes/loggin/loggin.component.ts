import { Component, OnInit } from '@angular/core';
import { LogginService } from '../../Services/loggin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-loggin',
  host: {'class': 'poner'},
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
  providers: [LogginService]
})
export class LogginComponent implements OnInit {

	public user:string;
	public password:string;
	public saber_datos:boolean;

	public ruta:boolean;

	constructor( private _peticiones:LogginService, private _router:Router ) {
		this.saber_datos = false;

	}
	
	ngOnInit(): void {
		
	}
	  
	iniciar_sesion() {
		
		this._peticiones.get_users().subscribe(
			resultado => {
				for (let i = 0; i < resultado.data.length; i++) {
					if (this.user.trim().toLocaleLowerCase() == resultado.data[i].first_name.toLocaleLowerCase() && this.password.trim().toLocaleLowerCase() == resultado.data[i].last_name.toLocaleLowerCase()) {
						this.saber_datos = false;
						this._router.navigate(['/home']);
						break;
					}
					else {
						this.saber_datos = true;
					}
				}
			},
			error => {
				console.log("Error al conectar con el servidor." + error);
			}

		);

	}

}
