import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

  // variables declared here will be class variables
  prefix = "I am a"
  name = "Big Papi";

  speak() {
    //variables declared here will be method variables
    const sentence = this.prefix + this.name;
    return sentence;
  }
}
