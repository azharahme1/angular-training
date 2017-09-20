import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppComponent} from "./app.component";
import {CalComponent} from "./cal.component";
import {CarComponent} from "./car.component";
import {PersonComponent} from "./person.component";


@NgModule({
	imports:[BrowserModule,FormsModule],
	declarations:[AppComponent,CalComponent,CarComponent,PersonComponent],
	bootstrap:[AppComponent]		
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
