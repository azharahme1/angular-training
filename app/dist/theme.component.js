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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ThemeComponent = class ThemeComponent {
    constructor(doc) {
        this.doc = null;
        this.doc = doc;
    }
    changeTheme(themeName) {
        var link = this.doc.createElement('link');
        var head = this.doc.getElementsByTagName('head')[0];
        head.appendChild(link);
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'css/themes/cal.component.' + themeName + '.css');
    }
};
ThemeComponent = __decorate([
    core_1.Component({
        //providers:[CalService],
        template: `<nav>
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
        selector: 'nav-right-bar',
        styles: [`
		
		nav{
			width:30%;
			float:right;
		}		

		nav li {
			display:inline;
		}

	`]
    }),
    __param(0, core_1.Inject('DOCUMENT')),
    __metadata("design:paramtypes", [Object])
], ThemeComponent);
exports.ThemeComponent = ThemeComponent;
//# sourceMappingURL=theme.component.js.map