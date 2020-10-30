import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './main/body/body.component';
import { RegisterMerchantComponent } from './main/merchant/register-merchant/register-merchant.component';
import { QrComponent } from './main/qr/qr.component';
import { TransactionsComponent } from './main/transactions/transactions.component';


const routes: Routes = [
  {path:'', redirectTo:'transaction', pathMatch:"full"},
  {path : 'home', component : BodyComponent},
  {path : 'reg-merchant', component : RegisterMerchantComponent},
  {path : 'qr', component : QrComponent},
  {path : 'transaction', component : TransactionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
