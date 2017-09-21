export class CalculatorService {

	constructor(){
		console.log("inside CalculatorService constructor()");
	}
	
	sum(valOne:number,valTwo:number):number{
		console.log("inside CalculatorService sum()");
		return valOne + valTwo;			
	}

	diff(valOne:number,valTwo:number):number{
		console.log("inside CalculatorService diff()");
		return valOne - valTwo;			
	}

	multiply(valOne:number,valTwo:number):number{
		console.log("inside CalculatorService multiply()");
		return valOne * valTwo;			
	}

	divide(valOne:number,valTwo:number):number{
		console.log("inside CalculatorService divide()");
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