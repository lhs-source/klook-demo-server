import { Component, OnInit } from '@angular/core';
import { QrService } from './qr.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor(private qr_service: QrService) { }

  qr_form = new FormGroup({
    qr_input: new FormControl('', Validators.required)
  });
  // qr_input = '';

  // qr_input = "";
  qr_data = "";
  barcode_data = "";

  ngOnInit(): void {
    // this.get_qrcode();
  }

  get_qrcode() {
    // let rand_num = Math.floor(Math.random() * 100) + 1;
    // console.log(this.qr_form.value.qr_input);
    if(!this.qr_form.value.qr_input){
      return;
    }
    this.qr_service.get_qrcode(this.qr_form.value.qr_input).subscribe(
      response => {
        // console.log("get qrcode ok ");
        // console.log(response);
        this.qr_data = String(response);
      },
      error => {
        console.log("get qrcode error ");
        console.log(error);
      }
    )
  }
  
  get_barcode() {
    // let rand_num = Math.floor(Math.random() * 100) + 1;
    // console.log(this.qr_form.value.qr_input);
    if(!this.qr_form.value.qr_input){
      return;
    }
    this.qr_service.get_barcode(this.qr_form.value.qr_input).subscribe(
      response => {
        // console.log("get barcode ok ");
        // console.log(response);
        this.barcode_data = String(response);
      },
      error => {
        console.log("get barcode error ");
        console.log(error);
      }
    )
  }
}
