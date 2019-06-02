import { BalanceDTO } from './../../model/balance.dto';
import { StorageUtil } from './../../util/storage-util';
import { AccountService } from './../../services/account.service';
import { Component } from '@angular/core';

@Component({
   selector: 'balance',
   templateUrl: 'balance.html'
})
export class BalanceComponent {

   balance: BalanceDTO = new BalanceDTO();

   constructor(
         public accountService: AccountService,
         public storage: StorageUtil) {
      console.log('Hello BalanceComponent Component');

      this.storage.getUser().then((user)=> {
         this.accountService.getBalanceByAccountNumber(user.accountNumber).subscribe(balance => {
            this.balance = balance;
            this.balance.accountNumber = user.accountNumber;
            this.balance.currency = user.currency.toString();
         });
      });
   }

}
