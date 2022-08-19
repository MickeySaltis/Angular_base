import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Type
  title: string;
  

  constructor(){

    // Value
    this.title = 'Base Angular';

  }
  

}
