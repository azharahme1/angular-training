import {Component} from "@angular/core";

@Component({
	template:`<div>
		<h1>Employee Details</h1>
		Enter Salary : <input type=text [(ngModel)]='salary' /><br/>
		<h1>We know your salary is : {{salary}}</h1>
		<h1>We know your salary is : {{salary}}</h1>
		<h1>We know your salary is : {{salary}}</h1>
		<h1>We know your salary is : {{salary}}</h1>
	</div>`,
	selector:'cool-app'
})
export class EmployeeComponent {
	
	salary:double = 1200000.00;

}
