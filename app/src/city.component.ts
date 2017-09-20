import {Component} from "@angular/core";

@Component({
	template:`<div>
		<h1>City Component</h1>
		Enter City : <input type=text [(ngModel)]='name' />
				<!-- You are invoking function based on some event -->
			     <input (click)='doVerify()' type=button value='Verify' />
	</div>`,
	selector:'cool-app'
})
export class CityComponent {
	
	name:string = "Banglore";

	//function declaration and implementation
	doVerify(){
		console.log(this.name)
	}
}
