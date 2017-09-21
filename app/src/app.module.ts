import {NgModule,enableProdMode} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


//Component imports
import {CarComponent} from "./car.component";
import {CarDetailComponent} from "./cardetail.component";
import {InfoComponent} from "./info.component";
import {ThemeComponent} from "./theme.component";
import {CalComponent} from "./cal.component";

//Service imports
import {CalService} from "./cal.service";
import {MathService} from "./math.service";
import {ICalService} from "./cal.interface";
import {JokeService} from "./joke.service";
import {DataService} from "./data.service";
import {CalculatorService} from "./calculator.service";


@NgModule({
	imports:[
		BrowserModule,
		FormsModule
	],
	providers:[
		DataService,
		JokeService,
		{provide:'calculator',useClass:CalculatorService},
		{provide:'simpleCalculator',useClass:MathService},
		{provide:'easyCalculator',useClass:CalService}
	],
	//providers:[{provide:'ICalService',useClass:MathService}],
	//providers:[{provide:'ICalService',useClass:CalService}],
	//providers:[CalService],
	declarations:[
		CalComponent,
		ThemeComponent,
		InfoComponent,
		CarComponent,
		CarDetailComponent
	],
	bootstrap:[CalComponent]		
})
class AppModule {
}

enableProdMode()
platformBrowserDynamic().bootstrapModule(AppModule)
