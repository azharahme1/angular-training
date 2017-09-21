import {Component,Inject} from "@angular/core";

@Component({
	//providers:[CalService],
	template:`<nav>
 		<ul type='none'>
 			<li>
 				<input (click)="changeTheme('skyblue')" type=radio name='themeOptions' value='skyblue'>SkyBlue
 			</li>
 			<li>
 				<input  (click)="changeTheme('frog')" type=radio name='themeOptions' value='frog'>Frog
 			</li>
 			<li>
 				<input  (click)="changeTheme('a11y')" type=radio name='themeOptions' value='a11y'>Contrast
 			</li>
 		</ul>
 	</nav>`,
	selector:'nav-right-bar',
	styles:[`
		
		nav{
			width:30%;
			float:right;
		}		

		nav li {
			display:inline;
		}

	`]
})
export class ThemeComponent {
	
	doc = null;

	constructor(@Inject('DOCUMENT') doc){
		this.doc = doc;
	}

	changeTheme(themeName){
		var link = this.doc.createElement('link');
 		var head = this.doc.getElementsByTagName('head')[0];	
 		head.appendChild(link);
 		link.setAttribute('rel','stylesheet');
 		link.setAttribute('href','css/themes/cal.component.'+themeName+'.css');
	}
}
