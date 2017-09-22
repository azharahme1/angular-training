export class Car{

	vin:number;
	name:string;
	make:string;
	price:number;
	color:string;
	logo:string;

	constructor(vin:number=0,name:string='X1',make:string='BMW',price:number=4500000.00,color:string='Black',logo:string='x1.png'){
	
		this.vin = vin;
		this.name = name;
		this.make = make;
		this.price = price;
		this.color = color;
		this.logo = logo;
	}	
}


