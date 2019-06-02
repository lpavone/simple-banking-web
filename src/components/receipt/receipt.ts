import { ReceiptDTO } from './../../model/receipt.dto';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
   selector: 'receipt',
   templateUrl: 'receipt.html'
})
export class ReceiptComponent {

   receipt: ReceiptDTO;

   constructor(public navParam: NavParams) {
      console.log('Hello ReceiptComponent Component');

      this.receipt = this.navParam.get('receipt');
   }

}
