import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable() 
export class LogginService {
    private url:string;
    

    constructor( private _http:HttpClient ) {
        this.url = "https://reqres.in/api/users?page=2";
    }


    get_users():Observable<any> {
        return this._http.get(this.url);
    }
}


