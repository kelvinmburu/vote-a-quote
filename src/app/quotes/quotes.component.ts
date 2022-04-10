import { Component, OnInit } from '@angular/core';
import { Quotes } from './quotes.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote: Quotes[];

  constructor() {
    this.quote = [
      new Quotes('Angular','https://angularjs.org', 3),
      new Quotes('Mozilla','https://mozilla.org', 2),
      new Quotes('React Main','https://react.org', 1),
    ]
   }

  ngOnInit(): void {
  }

}
