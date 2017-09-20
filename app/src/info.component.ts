import {Component} from "@angular/core";

@Component({
	template:`<div>
			<h1 *ngIf='coolDay'>Today is cool day.</h1>
			<h1 *ngIf='age'>You are old.</h1>
			<h1 *ngIf='age > 40'>You are old.</h1>
			<h1 *ngIf='age <= 40'>You are young.</h1>
			<h1 *ngIf='city'>This city is over crowded.</h1>
			<h1 [hidden]='raining'>Raining outside.</h1>

			<ul>
				<li *ngFor="let color of colors">
					<p>{{color}}</p>
				</li>
			</ul>
		
			<ul>
				<li *ngFor="let color of colors;let idx = index">
					<p>No.{{idx}} --- Todays color is {{color}}</p>
				</li>
			</ul>
				

	</div>`,
	selector:'cool-app',
})
export class InfoComponent {
	
	coolDay:boolean = true;
	age:number = 20;
	city:string = "Banglore";
	raining:boolean = true;
	colors:string[] = ['Yellow','Red','Black','Green','White'];
}

