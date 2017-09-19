import {Component} from "@angular/core";

@Component({template:'<h1>Cool Looking Component</h1>',selector:'cool-app'})
export class CoolComponent {
	
	constructor(){
		console.log("Inside CoolComponent  constructor!!!")
	}

}
