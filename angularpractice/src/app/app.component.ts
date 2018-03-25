import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  navigatoLink:string="recipes";
  title = 'app';
  navigateToLink(event) {
    this.navigatoLink = event;
    console.log(event);
  }
}
