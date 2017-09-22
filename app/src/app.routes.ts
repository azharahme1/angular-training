import {Routes,RouterModule} from "@angular/router";

import {HomeComponent} from "./home.component";
import {CricketComponent} from "./cricket.component";
import {NewsComponent} from "./news.component";
import {WeatherComponent} from "./weather.component";
import {MoviesComponent} from "./movies.component";
import {CarListComponent} from "./carlist.component";
import {CarFormComponent} from "./carform.component";


const routes:Routes = [
		{
			path:'home',
			component:HomeComponent
		},
		{
			path:'carform/:vin',
			component:CarFormComponent
		},
		{
			path:'carlist',
			component:CarListComponent
		},
		{
			path:'movies/:mid',
			component:MoviesComponent
		},
		{
			path:'news',
			component:NewsComponent
		},
		{
			path:'weather',
			component:WeatherComponent
		},
		{
			path:'cricket',
			component:CricketComponent
		},
		{
			path:'',
			redirectTo:'/home',
			pathMatch:'full'
		}

];

export const initializedRoutes = RouterModule.forRoot(routes);


