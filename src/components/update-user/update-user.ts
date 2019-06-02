import { StorageUtil } from './../../util/storage-util';
import { UserDTO } from './../../model/user.dto';
import { AccountService } from './../../services/account.service';
import { FormBuilder } from '@angular/forms';
import { CreateAccountComponent } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
   selector: 'update-user',
   templateUrl: 'update-user.html'
})
export class UpdateUserComponent extends CreateAccountComponent {

   constructor(
      public navCtrl: NavController,
      public formBuilder: FormBuilder,
      public accoutService: AccountService,
      public alertCtrl: AlertController,
      public accountService: AccountService,
      public storage: StorageUtil) {

      super(navCtrl, formBuilder, accoutService, alertCtrl);

      console.log('UpdateUserComponent Component');

      storage.getUser().then(
         user => {
            console.log('user local', user);
            return user;
         }).then((user: UserDTO) => {
            this.accountService.getAccountUserByIdUserAccountNumber(user.idUser, user.accountNumber).subscribe(
               (accountUser) => {
                  this.accountUser = accountUser;
                  console.log('accountUser', accountUser);
               }
            );
         });
   }

   updateAccount() {
      this.accountService.updateAccountUser(this.accountUser).subscribe(
         (userUpdated: UserDTO) => {
            this.storage.setUser(userUpdated);
            this.navCtrl.pop();
         });
   }

}
