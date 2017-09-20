import {Component} from "@angular/core";

@Component({
	template:`<div class='container'>
			<h1>{{title}}</h1>
			<calculator></calculator>
			<person-detail></person-detail>	
			<p style='clear:both'></p>	
			<hr style='height:10px;background-color:blue;' />	
			<car-detail></car-detail>
		<div>`,
	selector:'cool-app',
	styles:[`

		.container{
			width:90%;
			margin:auto;
		}
		.container h1{
			background-color:rgb(0,100,255);
			color:white;
			width:60%;
			margin:auto;
			text-align:center;
			margin-top:5px;
			margin-bottom:5px;
		}

		.container calculator{
			float:left;
			width:40%;
		}

		.container person-detail{
			float:right;
			width:40%;
		}

	`]
})
export class AppComponent {
	
	title:string = "Coolest App Ever";

}
