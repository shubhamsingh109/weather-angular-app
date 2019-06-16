import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'weather-list',
	templateUrl: './weather-list.component.html',
	styleUrls: ['./weather-list.component.css']
})

export class WeatherListComponent implements OnInit {
	@Input() data: any;

	constructor() { }


	ngOnInit() {
		console.log(this.data);
	}

}