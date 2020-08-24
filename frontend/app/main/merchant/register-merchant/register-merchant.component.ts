import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../merchant.service';
import { Merchant } from '../merchant.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-merchant',
  templateUrl: './register-merchant.component.html',
  styleUrls: ['./register-merchant.component.scss']
})
export class RegisterMerchantComponent implements OnInit {
  merchants : Merchant[];

  // form
  merchant_form = new FormGroup({
    name : new FormControl(''),
    merchant_no : new FormControl(''),
    phone_no : new FormControl('')
  });

  constructor(private merchant_service : MerchantService) { 
    this.get_all_merchants();
  }

  ngOnInit(): void {
  }

  click_add(){
    this.insert_merchant();
  }

  // service
  get_all_merchants(){
    this.merchant_service.get_all_merchants().subscribe(
      res => {
        console.log('success to get all merchants');
        console.log(res);
        this.merchants = res;
      },
      error => {
        console.log('fail to get all merchants');
        console.log(error);
      },
      () => {
        console.log('finally');
      }
    );
  }

  insert_merchant(){
    console.log(this.merchant_form.value);
    this.merchant_service.insert_merchant(this.merchant_form.value).subscribe(
      res => {
        console.log('success to insert');
        console.log(res);
        this.merchants.push(res); 
      },
      error => {
        console.log('fail to insert');
        console.log(error);
      },
      () => {
        console.log('finally');
      }
    );
  }
}
