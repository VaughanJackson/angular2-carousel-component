/* TODO I suspect this is unnecessary as it does not  seem to fix the issue showed
   up by the 'unit test':

   Chrome 54.0.2840 (Mac OS X 10.12.0) App: Angular2CarouselComponentCli should create the app FAILED
	'css-carousel' is not a known element:
	1. If 'css-carousel' is an Angular component, then verify that it is part of this module.
	2. If 'css-carousel' is a Web Component then add "CUSTOM_ELEMENTS_SCHEMA" to the '@NgModule.schema' of this component to suppress this message. ("
	  <div class="wrapper">
	    [ERROR ->]<css-carousel></css-carousel>
	    </div>
	  "): AppComponent@2:4
	Error: Template parse errors:
	    at TemplateParser.parse (http://localhost:9876/_karma_webpack_/0.bundle.js:8663:19)
	    at RuntimeCompiler._compileTemplate (http://localhost:9876/_karma_webpack_/0.bundle.js:17848:51)
	    at http://localhost:9876/_karma_webpack_/0.bundle.js:17771:83
	    at Set.forEach (native)
	    at compile (http://localhost:9876/_karma_webpack_/0.bundle.js:17771:47)
	    at RuntimeCompiler._compileComponents (http://localhost:9876/_karma_webpack_/0.bundle.js:17773:13)
	    at RuntimeCompiler._compileModuleAndAllComponents (http://localhost:9876/_karma_webpack_/0.bundle.js:17690:37)
	    at RuntimeCompiler.compileModuleAndAllComponentsSync (http://localhost:9876/_karma_webpack_/0.bundle.js:17678:21)
	    at TestingCompilerImpl.compileModuleAndAllComponentsSync (http://localhost:9876/_karma_webpack_/0.bundle.js:24656:35)
	    at TestBed._initIfNeeded (webpack:///Users/vaughanjackson/OneDrive/Projects/AngularJS2/angular2-carousel-component-cli/~/@angular/core/bundles/core-testing.umd.js:1059:0 <- src/test.ts:4416:40)
Chrome 54.0.2840 (Mac OS X 10.12.0): Executed 1 of 1 (1 FAILED) (0 secs / 0.045 secs)
*/

//import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/*import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';*/

import { CSSCarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CSSCarouselComponent
  ],
  /*imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],*/
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CSSCarouselModule { }
