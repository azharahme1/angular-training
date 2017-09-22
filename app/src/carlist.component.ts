import {Component,Inject,OnInit,OnDestroy} from "@angular/core";

import {Car} from "./car";
import {ICarService} from "./car.service";
import {imageUrl,editIcon,deleteIcon} from "./properties";
import {LogService} from "./log.service";


@Component({
	templateUrl:'partials/carlist.component.html',
	selector:'automobile-app',
	styleUrls:['css/carlist.component.css']
})
export class CarListComponent implements OnInit,OnDestroy {
	
	title:string = "Cool Automobile App";
	cars:Car[];
	imagePath:string = imageUrl;
	editImage:string = editIcon;
	deleteImage:string = deleteIcon;
	selectedCar:Car;
	edit:boolean = false;
	
	constructor(private logger:LogService,@Inject('ICarService') private carService:ICarService){
	}
	
	ngOnInit(){
		this.cars = this.carService.readAll();
	}

	ngOnDestroy(){
	}

	doEdit(car:Car){
		this.edit = true;
		this.selectedCar = JSON.parse(JSON.stringify(car));
		console.log(`Car ${car.name} open for edit mode!!!!`);
	}

	doDelete(vin:number){
		this.carService.deleteCar(vin);
		this.logger.info(`Car with ${vin} deleted!!!!`);
	}	

	doUpdate(evt){
		this.logger.info("Inside CarListComponent doUpdate()");
		this.carService.updateCar(evt.updatedCar);
	}

	doAdd(evt){
		this.logger.info("Inside CarListComponent doAdd()");
		this.carService.addCar(evt.car);
	}
	
}
