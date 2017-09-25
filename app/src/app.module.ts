import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {CarListComponent} from "./carlist.component";
import {PoliticianListComponent} from "./politician-list.component";

@NgModule({
	imports:[
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations:[
		CarListComponent,
		PoliticianListComponent
	],
	bootstrap:[PoliticianListComponent]
})
export class AppModule {
}





