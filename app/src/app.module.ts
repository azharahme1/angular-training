import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {HomeComponent} from "./home.component";
import {CricketComponent} from "./cricket.component";
import {NewsComponent} from "./news.component";
import {WeatherComponent} from "./weather.component";
import {MoviesComponent} from "./movies.component";
import {CarListComponent} from "./carlist.component";
import {CarFormComponent} from "./carform.component";

import {CarService} from "./car.service";
import {LogService} from "./log.service";

import {AppComponent} from "./app.component";

import {initializedRoutes} from "./app.routes";

@NgModule({
	imports:[BrowserModule,FormsModule,initializedRoutes],
	providers:[
		LogService,
		{provide:'ICarService',useClass:CarService}
	],
	declarations:[
		AppComponent,
		HomeComponent,
		CricketComponent,
		NewsComponent,
		WeatherComponent,
		MoviesComponent,
		CarListComponent,
		CarFormComponent
	],
	bootstrap:[AppComponent]
})
export class AppModule {
}





