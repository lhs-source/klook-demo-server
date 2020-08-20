import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  isshow : boolean = true;
  @Output() onoff = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.isshow = true;
  }
  
  click_button(){
    console.log("clicked");
    this.isshow = !this.isshow;
    this.onoff.emit(this.isshow);
  }

}
