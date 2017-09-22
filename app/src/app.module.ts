import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

//Component imports
import {CarListComponent} from "./carlist.component";
import {CarFormComponent} from "./carform.component";

//Service imports
import {CarService} from "./car.service";
import {LogService} from "./log.service";

@NgModule({
	imports:[
		BrowserModule,
		FormsModule
	],
	providers:[
		LogService,
		{provide:'ICarService',useClass:CarService}
	],
	declarations:[
		CarListComponent,
		CarFormComponent
	],
	bootstrap:[CarListComponent]		
})
export class AppModule {
}

