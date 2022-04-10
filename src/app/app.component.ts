import { Component } from '@angular/core';
import { Quotes } from './quotes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  quote: Quotes[];

  constructor() {
    this.quote = [
      new Quotes('Angular','https://angularjs.org', 3),
      new Quotes('Mozilla','https://mozilla.org', 2),
      new Quotes('React Main','https://react.org', 1),
    ]
   }
  addQuote(title: HTMLInputElement, link: HTMLInputElement){
    console.log(title.value)
  }
}
