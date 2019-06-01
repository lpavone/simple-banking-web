import { CreateAccountComponent } from './../../components/create-account/create-account';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardComponent } from '../../components/dashboard/dashboard';

@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage {

   accountNumber: number;

   constructor(public navCtrl: NavController) {

   }

   login(){
      console.log('Login requested', this.accountNumber);
      this.navCtrl.setRoot(DashboardComponent);
   }
   
   newAccount(){
      console.log('Redirect to create account page');
      this.navCtrl.setRoot(CreateAccountComponent);
   }

}
