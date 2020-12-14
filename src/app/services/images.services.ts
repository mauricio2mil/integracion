import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ImagesServices {

    public url: string;
    private apiKey: string = "iFXLuxGnYqHx2EIKjCL3UHoU7IK8i5Ak9IniUEc0"; 

    constructor(
        private _http: HttpClient
    ){  
        this.url = "https://api.nasa.gov/planetary/apod?api_key="+ this.apiKey +"&date=";
      }

    getImage(date:string){
        return this._http.get(this.url + date);
    }
}