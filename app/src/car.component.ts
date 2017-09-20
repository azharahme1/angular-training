import {Component} from "@angular/core";

@Component({
	template:`<div>
		<h1>Car Component</h1>
		<h1>Name : {{name}}</h1>
		<input (click)='doChange()' type=button value='Change' />
	</div>`,
	selector:'car-detail'
})
export class CarComponent {
	
	name:string = "BMW X6";

	doChange(){
		//UI updating logic
		this.name = "Jaguar XE";
	}
}
