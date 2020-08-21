import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './main/body/body.component';
import { RegisterMerchantComponent } from './main/merchant/register-merchant/register-merchant.component';


const routes: Routes = [
  {path:'', component : BodyComponent},
  {path : 'home', component : BodyComponent},
  {path : 'reg-merchant', component : RegisterMerchantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
