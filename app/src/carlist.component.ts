import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app',
  template: `<h1> {{title}} </h1>
  			 <button (click)='loadCars();'>Load Cars</button>
         <div class='carlist'>
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let car of cars">
        <td>{{car.make}} {{car.name}}</td>
        <td>{{car.price}}</td>
        <td>{{car.color}}</td>
      </tr>
    </tbody>
    </table>
  </div>`,
	styles:[`
	`]
})
export class CarListComponent implements OnInit{
  	title:string = 'Capita India Private Ltd';
  	cars:Array<any>;

  	constructor(private http:Http){}

    /*ngOnInit(){

      var self = this;
      var obs:Observable<Response> = this.http.get('cars.json');
      obs.subscribe(function(res:Response){
          self.cars = res.json();
          console.log("All cars loaded from server.......");
       });

    }*/

  	loadCars(){
  	 
           

      this.http.get('cars.json')
        .subscribe((res) => {
            this.cars = res.json();
            console.log("All cars loaded from server.......");
        });

      /*this.http.get('cars.json').subscribe((res:Response) => {
          this.cars = res.json();
          console.log("All cars loaded from server.......");
      });*/

      /*var obs:Observable<Response> = this.http.get('cars.json');
      obs.subscribe((res:Response) => {
          this.cars = res.json();
          console.log("All cars loaded from server.......");
      });*/

      /*obs.subscribe(function(res:Response){
          self.cars = res.json();
          console.log("All cars loaded from server.......");
       });*/

  	}
}
