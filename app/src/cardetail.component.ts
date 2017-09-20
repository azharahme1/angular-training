import {Component,Input} from "@angular/core";

@Component({
	template:`<div *ngIf="car">
		<h1>{{title}}</h1>
		<h2>Vin : {{car.vin}}</h2>
		<h2>Name : {{car.make}} {{car.model}}</h2>
		<h2>Price : {{car.price}}</h2>
		<h2>Color : {{car.color}}</h2>
		<h2>Year : {{car.year}}</h2>
		<img [src]='car.logo' />
	</div>`,
	selector:'car-detail'
})
export class CarDetailComponent {

	title:string = "Car Details";

	@Input()
	car:any;	

}
