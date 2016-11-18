// import Component from angular core
import { Component } from '@angular/core';

// @Component decorator
@Component({
  // tag
  selector: 'app-root',
  // template
  template: `
  <div class="wrapper">
    <css-carousel></css-carousel>
    </div>
  `,
   // css
  styles: [`
   .wrapper{
      width: 60%;
      margin: 60px auto;
    }
  `],
})
// actual class
export class AppComponent { }
