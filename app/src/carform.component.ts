import {Component,OnInit,Inject,Input,Output,EventEmitter} from "@angular/core";

import {ActivatedRoute,Router} from "@angular/router";


import {Car} from "./car";
import {CarService} from "./car.service";
import {LogService} from "./log.service";

@Component({
	templateUrl:'partials/carform.component.html',
	styleUrls:['css/carform.component.css'],
	selector:'car-form'
})
export class CarFormComponent implements OnInit {

	title:string = 'Car Entry Form';
	car:Car;
	
	constructor(private router:Router,private activatedRoute:ActivatedRoute,private logger:LogService,@Inject('ICarService') private carService:ICarService){
	}

	ngOnInit(){
		this.editMode = false;
		this.car = new Car();

		var self = this;
		this.activatedRoute.params.subscribe(function(prms){
			var vin = parseInt(prms['vin']);
			console.log("VIN "+vin);
			self.car = self.carService.findCar(vin);
			self.editMode = true;
		});

	}

	doAdd(){
		this.logger.info("Inside CarFormComponent doAdd()");
		this.carService.addCar(this.car);
		this.router.navigate(['/carlist']);
	}

	doUpdate(){
		this.logger.info("Inside CarFormComponent doUpdate()");
		this.carService.updateCar(this.car);
		this.router.navigate(['/carlist']);

	}

}
