import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CitySearchService {
	constructor(private http: Http) { }

	searchCity(term: string): Observable<any> {
		return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7aa31af4f811d329bb4cf6950db90dfe&q=${term}`)
			.map(response => response.json())
	}
}  