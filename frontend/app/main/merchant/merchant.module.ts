import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';



@NgModule({
  declarations: [RegisterMerchantComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    RegisterMerchantComponent
  ]
})
export class MerchantModule { }
