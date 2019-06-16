import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectorComponent } from './connector/connector.component';

import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/search/Delhi', pathMatch: 'full' },
    { path: 'search/:value', component: ConnectorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }