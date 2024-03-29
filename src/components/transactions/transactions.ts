import { StorageUtil } from './../../util/storage-util';
import { ReceiptDTO } from './../../model/receipt.dto';
import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
   selector: 'transactions',
   templateUrl: 'transactions.html'
})
export class TransactionsComponent {

   receipts: ReceiptDTO[] = [];

   constructor(
      public transactionService: TransactionService,
      private storage: StorageUtil
   ) {
      console.log('TransactionsComponent Component');

      this.storage.getUser().then(user => {
         transactionService.getTransactionsByAccountNumber(user.accountNumber).subscribe(receipts => {
            this.receipts = receipts;
         });
      });

   }

   getStyleCurrency(receipt: ReceiptDTO): any {
      return {
         'color': (receipt.amount < 0) ? 'red' : ((receipt.amount > 0) ? 'blue' : 'black')
      };
   }

}
