import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CitySearchService } from '../services/city-search.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'connector',
	templateUrl: './connector.component.html',
})
export class ConnectorComponent implements OnInit {
	
	data: any = {};

	constructor(
		private citySearchservice: CitySearchService,
		private route: ActivatedRoute,
	) { }

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.citySearchservice.searchCity(params.get('value')))
			.subscribe(city => { this.data = city; console.log(this.data) });
		
	}
}  