import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MerchantModule } from './merchant/merchant.module';
import { QrModule } from './qr/qr.module';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavigationComponent,
    TransactionsComponent,
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MerchantModule,
    QrModule,
  ]
})
export class MainModule { }
