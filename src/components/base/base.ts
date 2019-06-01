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

   constructor(public navCtrl: NavController) {
      console.log('Hello BaseComponent Component');
      this.rootPage = DashboardComponent;
   }

   back() {
      this.navCtrl.popToRoot();
   }

   logout() {
      this.navCtrl.setRoot(MyApp);
   }

}
