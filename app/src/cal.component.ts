import {Component} from "@angular/core";

@Component({
	templateUrl:'partials/cal.component.html',
	selector:'calculator',
	styleUrls:['css/themes/cal.component.a11y.css']
})
export class CalComponent {
	
	title:string = "Simple Math Calculator";
	valOne:number = 10;
	valTwo:number = 10;
	result:number = 20;
	
	doSum(){
		this.result = this.valOne + this.valTwo;			
		//this.result = parseInt(this.valOne) + parseInt(this.valTwo);			
	}

	doDiff(){
		this.result = this.valOne - this.valTwo;			
	}

}
