export class LogService{
	
	info(message){
		var date = new Date()
		var formattedDate = date.toString().substring(0,24);
		console.log(`INFO - ${formattedDate} - ${message} !!!!`);
	}

}