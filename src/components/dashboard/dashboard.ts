import { TransferFundComponent } from './../transfer-fund/transfer-fund';
import { TransactionsComponent } from './../transactions/transactions';
import { BalanceComponent } from './../balance/balance';
import { MakeDepositComponent } from './../make-deposit/make-deposit';
import { UpdateUserComponent } from './../update-user/update-user';
import { PageList, PageItem } from './../../model/page-item';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
   selector: 'dashboard',
   templateUrl: 'dashboard.html'
})
export class DashboardComponent {

   pages: PageList;

   constructor(public navCtrl: NavController) {
      console.log('Hello DashboardComponent Component');

      this.getMenus();
      console.log('pages', this.pages);
   }

   openPage(item: PageItem) {
      this.navCtrl.push(item.component);
   }

   private getMenus() {
      this.pages = [
         {
            title: 'My Account',
            icon: 'account-profile.png',
            component: UpdateUserComponent
         },
         {
            title: 'Balance',
            icon: 'wallet.png',
            component: BalanceComponent
         },
         {
            title: 'Make deposit',
            icon: 'deposit-icon.jpg',
            component: MakeDepositComponent
         },
         {
            title: 'Transactions',
            icon: 'transactions.png',
            component: TransactionsComponent
         },
         {
            title: 'Transfer funds',
            icon: 'transfer.png',
            component: TransferFundComponent
         },
         /*
         {
            title: 'Currencies',
            icon: 'transfer-currency.png',
            component: UpdateUserComponent
         },
         {
            title: 'Payments',
            icon: 'external-payment.png',
            component: UpdateUserComponent
         },
         */
      ];
   }

}
