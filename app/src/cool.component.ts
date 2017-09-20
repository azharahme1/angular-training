import {Component,OnInit,OnDestroy} from "@angular/core";

@Component({template:'<h1>Cool Looking Component</h1>',selector:'cool-app'})
export class CoolComponent implements OnInit,OnDestroy {
	
	constructor(){
		console.log("Inside CoolComponent  constructor!!!")
	}

	//10 more things

	//implementation
	ngOnInit(){
		console.log("Inside CoolComponent  ngOnInit!!!")
	}

	//implementation
	ngOnDestroy(){
		console.log("Inside CoolComponent  ngOnDestroy!!!")
	}
	
}
