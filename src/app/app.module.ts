import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CitySearchService } from './services/city-search.service';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { ConnectorComponent } from './connector/connector.component';


@NgModule({
	declarations: [
		AppComponent,
		WeatherListComponent,
		SearchComponent,
		WeatherDetailsComponent,
		WeatherComponent,
		ConnectorComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		NgxPaginationModule

	],
	providers: [CitySearchService],
	bootstrap: [AppComponent]
})
export class AppModule { }
