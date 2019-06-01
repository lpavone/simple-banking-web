import { StorageUtil } from './../../util/storage-util';
import { UserDTO } from './../../model/user.dto';
import { AccountService } from './../../services/account.service';
import { FormBuilder } from '@angular/forms';
import { CreateAccountComponent } from './../create-account/create-account';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserService } from '../../services/user.service';

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
      public userService: UserService,
      public storage: StorageUtil) {

      super(navCtrl, formBuilder, accoutService, alertCtrl);

      console.log('Hello UpdateUserComponent Component');

      storage.getUser().then(
         user => {
            console.log('user local', user);
            return user;
         }).then((user: UserDTO) => {
            this.userService.getUserByIdUserAccountNumber(user.idUser, user.accountNumber).subscribe(
               (accountUser) => {
                  this.accountUser = accountUser;
                  console.log('accountUser', accountUser);
               }
            );
         });
   }

   updateAccount() {
      this.userService.updateUser(this.accountUser).subscribe(
         (userUpdated: UserDTO) => {
            this.storage.setUser(userUpdated);
         });
   }

}
