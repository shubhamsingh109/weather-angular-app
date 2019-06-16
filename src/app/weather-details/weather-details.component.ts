import { Component, Input, OnInit} from '@angular/core';
@Component({
    selector: 'weather-detail',
    templateUrl: './weather-detail.component.html',
    styleUrls:['./weather-detail.component.css']
  })
export class WeatherDetailsComponent implements OnInit{
    @Input() weather: any={};
    @Input() data:any={};
    date:string;
    constructor(){}
    ngOnInit(){
    }
}