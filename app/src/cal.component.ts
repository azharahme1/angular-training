import {Component} from "@angular/core";

@Component({
	template:`<div>
		<h1>{{title}}</h1>
		Enter Value : <input type=number [(ngModel)]='valOne' /><br/>
		Enter Value : <input type=number [(ngModel)]='valTwo' /><br/>
			      <input (click)='doSum()' type=button value='SUM' /><br/>
		<h1>Result : {{result}}</h1>
	</div>`,
	selector:'cool-app'
})
export class CalComponent {
	
	title:string = "Simple Math Calculator";
	valOne:number = 10;
	valTwo:number = 10;
	result:number = 20;
	
	doSum(){
		this.result = this.valOne + this.valTwo;			
		//this.result = parseInt(this.valOne) + parseInt(this.valTwo);			
	}

}
