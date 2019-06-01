import { StorageUtil } from './../../util/storage-util';
import { BaseComponent } from './../../components/base/base';
import { LoginService } from './../../services/login.service';
import { CreateAccountComponent } from './../../components/create-account/create-account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {

   accountNumber: number;

   constructor(
      public navCtrl: NavController,
      public loginService: LoginService,
      public storage: StorageUtil) {
   }

   login() {
      console.log('Login requested', this.accountNumber);

      this.loginService.login(this.accountNumber).subscribe((user) => {
         console.log('Login response', user);

         this.storage.setUser(user);

         this.navCtrl.setRoot(BaseComponent);
      });
   }

   newAccount() {
      console.log('Redirect to create account page');
      this.navCtrl.setRoot(CreateAccountComponent);
   }

}
