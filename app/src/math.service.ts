import {ICalService} from "./cal.interface.ts";

export class MathService implements ICalService{

	constructor(){
		console.log("inside MathService constructor()");
	}
	
	sum(valOne:number,valTwo:number):number{
		console.log("inside MathService sum()");
		return valOne + valTwo;			
	}

	diff(valOne:number,valTwo:number):number{
		console.log("inside MathService diff()");
		return valOne - valTwo;			
	}

	multiply(valOne:number,valTwo:number):number{
		console.log("inside MathService multiply()");
		return valOne * valTwo;			
	}

	divide(valOne:number,valTwo:number):number{
		console.log("inside MathService divide()");
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