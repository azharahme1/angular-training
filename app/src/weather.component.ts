import {Component} from "@angular/core";

@Component({
	selector:'weather',
	template:`
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
	`
})
export class WeatherComponent{
	title:string = "Todays Weather";
	summary:string = "It is chill outside.";

}



