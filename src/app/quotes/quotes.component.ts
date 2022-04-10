import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes.model';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 @Input() quote!: Quotes

 //Function to use model to for vote up

 voteUp() {
   this.quote.voteUp();
 }

 //Function to use model for vote down

 voteDown() {
   this.quote.voteDown();
 }

  ngOnInit(): void {
  }

}
