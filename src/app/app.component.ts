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
      new Quotes('Walt Disney','All our dreams can come true, if we have the courage to pursue them.', 3),
      new Quotes('Michele Ruiz','If people are doubting how far you can go, go so far that you can’t hear them anymore.', 2),
      new Quotes('Socrates','Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.', 4),
    ]
   }
  addQuote(title: HTMLInputElement, link: HTMLInputElement){
    this.quote.push(new Quotes(title.value, link.value));
    title.value = '';
    link.value = '';
  }

  //Function to sort quotes based on Votes

  sortQuotes(): Quotes[] {
    return this.quote.sort((a: Quotes, b: Quotes)=>b.votes - a.votes);
  }
}
