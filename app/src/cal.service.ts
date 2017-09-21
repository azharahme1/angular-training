import {ICalService} from "./cal.interface.ts";

export class CalService implements ICalService{

	constructor(){
		console.log("inside CalService constructor()");
	}
	
	sum(valOne:number,valTwo:number):number{
		console.log("inside CalService sum()");
		return valOne + valTwo;			
	}

	diff(valOne:number,valTwo:number):number{
		console.log("inside CalService diff()");
		return valOne - valTwo;			
	}

	multiply(valOne:number,valTwo:number):number{
		console.log("inside CalService multiply()");
		return valOne * valTwo;			
	}

	divide(valOne:number,valTwo:number):number{
		console.log("inside CalService divide()");
		if(valOne <= 0 || valTwo <= 0){
			//throw new Error('For division, numbers can not be zero or less!!!');
			throw {
				type:'InvalidValueError',
				message:'For division, numbers can not be zero or less!!!',
				name:'InvalidValueError'
			};
		}
		return valOne / valTwo;			
	}

}