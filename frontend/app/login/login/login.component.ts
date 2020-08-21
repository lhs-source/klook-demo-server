import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
