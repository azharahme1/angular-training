import {Component} from "@angular/core";

@Component({
	template:`<div class='container'>
		<div class='car'>
			<h1>Car Component</h1>
			<h2>Name : {{name}}</h2>
			<img width=50 height=50 [src]='logo' />
			<input (click)='showDetail()' type=button value='Detail' />
		</div>
		<car-detail [car]='selectedCar'></car-detail>
	</div>`,
	selector:'cool-app',
	styles:[`

		.car {
			float:left;
			width:40%;
		}

	  	car-detail{	
	   		float:right;
		}
		

	`]
})
export class CarComponent {
	
	name:string = "Audi Q5";
	logo:string = "images/q5.png";
	selectedCar:any = null;

	showDetail(){
		var car:any = {
			vin:100,
			model:'Q5',
			make:'Audi',
			price:129000000.00,
			color:'red',
			year:2010,
			logo:'images/q5.png'
		};

		this.selectedCar = car;
	}
}
