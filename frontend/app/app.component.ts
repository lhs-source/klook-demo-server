import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lhspage';
  show_splash : boolean = true;

  constructor(){
    this.show_splash = true;
  }

  change_splash(onoff : boolean){
    console.log("notice at app : " + onoff);
    this.show_splash = onoff;
  }
}
