import { Component } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app',
  template: `<h1> {{title}} </h1>
  			 <button (click)='loadPoliticians();'>Load Politicians</button>
         <button (click)='addPolitician();'>Add Politician</button>
         <div>
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Frauds</th>
        <th>Assets</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let politician of politicians">
        <td>{{politician.name}}</td>
        <td>{{politician.frauds}}</td>
        <td>{{politician.assets}}</td>
      </tr>
    </tbody>
    </table>
  </div>`,
	styles:[`
	`]
})
export class PoliticianListComponent implements OnInit{
  	title:string = 'India Private Ltd';
  	politicians:Array<any>;

  	constructor(private http:Http){}

    loadPoliticians(){ 	 
        
      var url = "http://localhost:5000/pms/rest/politician/all";

      let headers = new Headers();  
      headers.append('Accept', 'application/json');
      //headers.append('Access-Control-Allow-Origin', '*');
   
      let options = new RequestOptions({ headers: headers });
      
      this.http.get(url,options)
        .subscribe((res) => {
            this.politicians = res.json().politician;
        });
  	}


    addPolitician(){   

      var politicianModel = {"assets":"800CR","frauds":"150","name":"Rahul"};
        
      var url = "http://localhost:5000/pms/rest/politician";

      let headers = new Headers();  
      headers.append('Accept', 'text/plain');
      //headers.append('Content-Type', 'application/json');
      
      let options = new RequestOptions({ headers: headers });
      
      this.http.post(url,politicianModel,options)
        .subscribe((res) => {
            console.log(res);
        });
    }


}
