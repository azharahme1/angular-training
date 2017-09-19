import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {CoolComponent} from "./cool.component";
import {PersonComponent} from "./person.component";
import {CityComponent} from "./city.component";
import {CarComponent} from "./car.component";
import {EmployeeComponent} from "./employee.component";
import {CalComponent} from "./cal.component";

@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[CalComponent,EmployeeComponent,CarComponent,CityComponent,PersonComponent,CoolComponent],
	bootstrap:[CalComponent]		
})
class AppModule {

	constructor(){
		console.log("Inside AppModule constructor!!!")
	}

}

platformBrowserDynamic().bootstrapModule(AppModule)
