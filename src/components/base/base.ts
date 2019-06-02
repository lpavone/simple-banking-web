import { AccountUserDTO } from './../../model/account-user.dto';
import { StorageUtil } from './../../util/storage-util';
import { MyApp } from './../../app/app.component';
import { DashboardComponent } from './../dashboard/dashboard';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
   selector: 'base',
   templateUrl: 'base.html'
})
export class BaseComponent {

   rootPage: any;
   user: AccountUserDTO = new AccountUserDTO();
   
   constructor(public navCtrl: NavController,
      private storage: StorageUtil) {
      console.log('BaseComponent Component');
      this.rootPage = DashboardComponent;
      this.storage.getUser().then(user => this.user = user);
   }

   back() {
      this.navCtrl.push(BaseComponent);
      //this.navCtrl.setRoot(BaseComponent);
   }

   logout() {
      this.navCtrl.setRoot(MyApp);
   }

}
