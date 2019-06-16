import { Component } from '@angular/core';


@Component({
    selector : 'root-app',
    templateUrl: './weather.component.html',
    styleUrls:['./weather.component.css']
    })
    
export class WeatherComponent{
    data:any={}; 
    onSearch(data:any){
      this.data=data;  
    }
}