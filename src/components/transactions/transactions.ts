import { Component } from '@angular/core';

/**
 * Generated class for the TransactionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transactions',
  templateUrl: 'transactions.html'
})
export class TransactionsComponent {

  text: string;

  constructor() {
    console.log('Hello TransactionsComponent Component');
    this.text = 'Hello World';
  }

}
