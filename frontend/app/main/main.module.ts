import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavigationComponent,
    RegisterMerchantComponent
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class MainModule { }
