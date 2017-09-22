import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
	selector:'cricket',
	template:`
		<h1>{{title}}</h1>
		<div>{{summary}}</div>
		<br/>

		<input (click)='goToHomePage()' type=button value='Home' />
		
		Enter ID : <input type=number [(ngModel)]='movieId' />
		<input (click)='goToMoviePage()' type=button value='Movie 2' />
	`
})
export class CricketComponent{
	title:string = "Cricket Match";
	summary:string = "20:20 final is on tomorrow!!";
	movieId:number = 200;
	constructor(private router:Router){
	}

	goToMoviePage(){
		this.router.navigate(['/movies',this.movieId]);
	}

	goToHomePage(){
		this.router.navigate(['/home']);
	}
}



