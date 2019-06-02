import { AccountUserDTO } from '../../model/account-user.dto';
import { AccountService } from './../../services/account.service';
import { HomePage } from './../../pages/home/home';
import { CurrencyTypeDTO } from '../../model/currency-type.dto';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'create-account',
   templateUrl: 'create-account.html'
})
export class CreateAccountComponent {

   formGroup: FormGroup;

   currencies: CurrencyTypeDTO[];

   accountUser: AccountUserDTO = new AccountUserDTO();

   constructor(
      public navCtrl: NavController,
      public formBuilder: FormBuilder,
      public accoutService: AccountService,
      public alertCtrl: AlertController) {

      console.log('CreateAccountComponent Component');

      this.configureFormGroup();

      this.initializaCurrencies();
   }

   private configureFormGroup() {
      this.formGroup = this.formBuilder.group({
         name: ['', [Validators.required]],
         email: ['', [Validators.required, Validators.email]],
         documentID: ['', [Validators.required]],
         address: ['', [Validators.required]],
         phoneNumber: ['', [Validators.required]],
         currency: ['', [Validators.required]],
      });
   }

   private initializaCurrencies() {
      this.currencies = new Array<CurrencyTypeDTO>();
      this.currencies.push(new CurrencyTypeDTO("EUR"));
      this.currencies.push(new CurrencyTypeDTO("USD"));
      this.currencies.push(new CurrencyTypeDTO("BRL"));
   }

   createAccount() {
      this.accoutService.createAccount(this.accountUser).subscribe((accountNumber: number) => {
         this.presentConfirm(accountNumber);
      })
   }

   back() {
      this.navCtrl.setRoot(HomePage);
   }

   private presentConfirm(accountNumber: number) {
      let alert = this.alertCtrl.create({
         title: 'Account created successfully',
         message: 'Your account number: ' + accountNumber,
         buttons: [
            {
               text: 'OK',
               handler: () => {
                  this.navCtrl.setRoot(HomePage);
               }
            }
         ]
      });
      alert.present();
   }

}
