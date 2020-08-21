import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// main page module
import { MainModule } from './main/main.module';
import { MerchantService } from './main/merchant/merchant.service';

// login
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MainModule,
    LoginModule
  ],
  providers: [MerchantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
