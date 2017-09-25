"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
let PoliticianListComponent = class PoliticianListComponent {
    constructor(http) {
        this.http = http;
        this.title = 'India Private Ltd';
    }
    loadPoliticians() {
        var url = "http://localhost:5000/pms/rest/politician/all";
        let headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        //headers.append('Access-Control-Allow-Origin', '*');
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.get(url, options)
            .subscribe((res) => {
            this.politicians = res.json().politician;
        });
    }
    addPolitician() {
        var politicianModel = { "assets": "800CR", "frauds": "150", "name": "Rahul" };
        var url = "http://localhost:5000/pms/rest/politician";
        let headers = new http_1.Headers();
        headers.append('Accept', 'text/plain');
        //headers.append('Content-Type', 'application/json');
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.post(url, politicianModel, options)
            .subscribe((res) => {
            console.log(res);
        });
    }
};
PoliticianListComponent = __decorate([
    core_1.Component({
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
        styles: [`
	`]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], PoliticianListComponent);
exports.PoliticianListComponent = PoliticianListComponent;
//# sourceMappingURL=politician-list.component.js.map