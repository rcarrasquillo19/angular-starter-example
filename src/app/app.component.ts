import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  
{
  // variables declared here will be class variables
  prefix = "I am a "
  name = "Star Student";

  //Iterating through String Arrays
  colors:string[] = ['red', 'blue', 'green', 'purple'];

  //Iterating with Indices
  fruits: string[] = ['apple', 'orange', 'pear', 'peach'];

  //Iterating through Custom Types
  subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
  honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
  bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
  cars:Car[] = [this.subaru, this.honda, this.bmw];

  speak() 
  {
    //variables declared here will be method variables
    const sentence = this.prefix + this.name;
    return sentence;
  }
}
 