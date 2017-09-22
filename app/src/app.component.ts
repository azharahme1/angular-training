import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<h1> {{title}} </h1>
  			<nav>
    			<ul>
  					<li><a routerLink='news'>News</a></li>
  					<li><a routerLink='weather'>Weather</a></li>
  					<li><a routerLink='cricket'>Cricket</a></li>
  					<li><a routerLink=''>Calculator</a></li>
  					<li><a routerLink='movies/100'>Movies 1</a></li>
            <li><a routerLink='movies/200'>Movies 2</a></li>
            <li><a routerLink='movies/300'>Movies 3</a></li>
            <li><a routerLink='carlist'>Car List</a></li>
  					<li><a routerLink=''>Products</a></li>
  					<li><a routerLink=''>Partners</a></li>
  				</ul>
  			</nav>
  			<router-outlet></router-outlet>
    		`,
	styles:[`
		nav{
			background-color:black;
		}		

		li {
			display:inline;
		}
		
		li a{
			color:white;
			font-size:20px;
			text-decoration:none;
			margin-right:20px;
		}
	`]
})
export class AppComponent {
  	title:string = 'Capita India Private Ltd';
}
