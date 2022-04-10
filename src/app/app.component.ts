import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addQuote(title: HTMLInputElement, link: HTMLInputElement){
    console.log(title.value)
  }
}
