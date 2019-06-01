import { HomePage } from './../../pages/home/home';
import { CurrencyType } from './../../model/currency-type';
import { Component } from '@angular/core';
import { NewAccount } from '../../model/new-account';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CreateAccountComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
   selector: 'create-account',
   templateUrl: 'create-account.html'
})
export class CreateAccountComponent {

   currencies: CurrencyType[];

   newAccount: NewAccount = new NewAccount();

   constructor(public navCtrl: NavController) {
      console.log('Hello CreateAccountComponent Component');

      this.currencies = new Array<CurrencyType>();
      this.currencies.push(new CurrencyType("EUR"));
      this.currencies.push(new CurrencyType("USD"));
      this.currencies.push(new CurrencyType("BRL"));

   }

   createAccount() {
      this.navCtrl.setRoot(HomePage);
   }

   back() {
      this.navCtrl.setRoot(HomePage);
   }

}
