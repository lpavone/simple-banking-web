import { MyApp } from './../app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './create-account/create-account';
import { DashboardComponent } from './dashboard/dashboard';
import { UpdateUserComponent } from './update-user/update-user';
import { BaseComponent } from './base/base';
import { MakeDepositComponent } from './make-deposit/make-deposit';
import { BalanceComponent } from './balance/balance';
import { TransactionsComponent } from './transactions/transactions';
import { TransferFundComponent } from './transfer-fund/transfer-fund';
import { ReceiptComponent } from './receipt/receipt';

@NgModule({
   declarations: [
      CreateAccountComponent,
      DashboardComponent,
      UpdateUserComponent,
      BaseComponent,
      MakeDepositComponent,
      BalanceComponent,
      TransactionsComponent,
      TransferFundComponent,
      ReceiptComponent,
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp)
   ],
   exports: [
      CreateAccountComponent,
      DashboardComponent,
      UpdateUserComponent,
      BaseComponent,
      MakeDepositComponent,
      BalanceComponent,
      TransactionsComponent,
      TransferFundComponent,
      ReceiptComponent,
   ],
   entryComponents: [
      DashboardComponent,
      CreateAccountComponent,
      UpdateUserComponent,
      BaseComponent,
      MakeDepositComponent,
      BalanceComponent,
      TransactionsComponent,
      TransferFundComponent,
      ReceiptComponent,
   ],
   providers: [
   ]
})
export class ComponentsModule { }
