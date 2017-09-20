import {Component} from "@angular/core";

@Component({
	template:`<div class='person'>
		<h1>Person Details</h1>
		<h2>Name : {{name}}</h2>
		<h2>Age : {{age}}</h2>
		<img [width]='size.w' [height]='size.h' [src]='logo' /><br/>
		<input (click)="changeImage()" type=button value='Change' />
		<input (mouseover)="doDance()" type=button value='Dance' />
	</div>`,
	selector:'person-detail',
	styles:[`

		.person{
			width:100%;
			text-align:center;
			border:20px inset blue;
		}

		.person h1 {
			background-color:rgb(0,100,255);
			color:white;
			width:60%;
			margin:auto;
			text-align:center;
			margin-top:5px;
			margin-bottom:5px;
		}	

	`]
})
export class PersonComponent {
	
	name:string = "Pintu";
	age:number = 25;
	logo:string = "images/person1.jpg";
	size:any = {w:200,h:150}; 	

	constructor(){
		console.log("Inside PersonComponent constructor!!!")
	}

	changeImage(){
		this.logo = "images/person2.jpg";
		console.log("Image changed!!!!")
	}

	doDance(){
		this.logo = "images/person1.jpg";
		console.log("Perosn dancing.......!!!!")
	}
	
}
