import { Component } from '@angular/core';

/**
 * Generated class for the TransferFundComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transfer-fund',
  templateUrl: 'transfer-fund.html'
})
export class TransferFundComponent {

  text: string;

  constructor() {
    console.log('Hello TransferFundComponent Component');
    this.text = 'Hello World';
  }

}
