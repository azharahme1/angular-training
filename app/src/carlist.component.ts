import {Component,Inject,OnInit,OnDestroy} from "@angular/core";

import {Car} from "./car";
import {ICarService} from "./car.service";
import {imageUrl,editIcon,deleteIcon} from "./properties";
import {LogService} from "./log.service";


@Component({
	templateUrl:'partials/carlist.component.html',
	selector:'automobile',
	styleUrls:['css/carlist.component.css']
})
export class CarListComponent implements OnInit,OnDestroy {
	
	title:string = "Cool Automobile App";
	cars:Car[];
	imagePath:string = imageUrl;
	editImage:string = editIcon;
	deleteImage:string = deleteIcon;
	
	constructor(private logger:LogService,@Inject('ICarService') private carService:ICarService){
	}
	
	ngOnInit(){
		this.cars = this.carService.readAll();
	}

	ngOnDestroy(){
	}

	doDelete(vin:number){
		this.carService.deleteCar(vin);
		this.logger.info(`Car with ${vin} deleted!!!!`);
	}	

	
}
