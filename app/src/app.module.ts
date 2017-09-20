import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {CarComponent} from "./car.component";
import {CarDetailComponent} from "./cardetail.component";
import {InfoComponent} from "./info.component";


@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[InfoComponent,CarComponent,CarDetailComponent],
	bootstrap:[InfoComponent]		
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
