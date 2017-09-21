import {Injectable} from "@angular/core";

import {DataService} from "./data.service";

@Injectable()
export class JokeService{

	constructor(private dataService:DataService){}

	nextJoke():string{
		let jokes = this.dataService.readAll();
		let idx = Math.floor(Math.random()*jokes.length);
		return jokes[idx];
	}
		
}