export class DataService{
		
	const jokes:string[] = [
		'Training will finish at 9 P.M.',
		'Fridays are very boring.',
		'Mondays are amazing.',
		'Tusedays are always welcome.'
	];

	readAll():string[]{
		console.log("Inside DataService readAll()!!!");
		return this.jokes;
	}

	addJoke(newJoke:string){
		this.jokes.push(newJoke);
	}
		
}