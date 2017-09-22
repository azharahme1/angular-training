import {Component,OnInit,Inject,Input,Output,EventEmitter} from "@angular/core";

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

	@Input()
	editMode:boolean;

	@Input()
	car:Car;

	@Output()
	carUpdated:EventEmitter = new EventEmitter();

	@Output()
	carAdded:EventEmitter = new EventEmitter();
	
	constructor(private logger:LogService,@Inject('ICarService') private carService:ICarService){
	}

	ngOnInit(){
		this.editMode = false;
		this.car = new Car();
	}

	doAdd(){
		this.logger.info("Inside CarFormComponent doAdd()");
		this.carAdded.emit({car:JSON.parse(JSON.stringify(this.car))});
	}

	doUpdate(){
		this.logger.info("Inside CarFormComponent doUpdate()");
		this.carUpdated.emit({updatedCar:JSON.parse(JSON.stringify(this.car)),time:new Date()});
	}

}
