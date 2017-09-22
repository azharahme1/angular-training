import {Component,OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
	selector:'news',
	template:`
		<h1>{{title}}</h1>
		<div>{{movieName}}</div>
	`
})
export class MoviesComponent implements OnInit{
	title:string = "Movie Details";
	movieName:string;
	movies = [
			{id:100,name:'Newton'},
			{id:200,name:'DDLJ'},
			{id:300,name:'Bahubali'},
		];
	

	constructor(private activatedRoute:ActivatedRoute){
	}

	ngOnInit(){
		var self = this;
		this.activatedRoute.params.subscribe(function(prms){
			var movieId = parseInt(prms['mid']);
			for(let m of self.movies){
				if(m.id === movieId){
					self.movieName = m.name;
					break;
				}
			}	
		});
	}		

}



