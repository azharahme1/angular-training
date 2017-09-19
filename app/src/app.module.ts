import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {CoolComponent} from "./cool.component";

@NgModule({
	imports:[BrowserModule],
	declarations:[CoolComponent],
	bootstrap:[CoolComponent]		
})
class AppModule {

	constructor(){
		console.log("Inside AppModule constructor!!!")
	}

}

platformBrowserDynamic().bootstrapModule(AppModule)
