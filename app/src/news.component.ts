import {Component} from "@angular/core";

@Component({
	selector:'news',
	template:`
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
	`
})
export class NewsComponent{
	title:string = "Breaking News";
	summary:string = "Today we will stay till 11 PM.";

}



