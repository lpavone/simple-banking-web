import { AccountUserDTO } from './../../model/account-user.dto';
import { AccountService } from './../../services/account.service';
import { ReceiptComponent } from './../receipt/receipt';
import { StorageUtil } from './../../util/storage-util';
import { TransactionService } from './../../services/transaction.service';
import { TransferDTO } from './../../model/transfer.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
   selector: 'transfer-fund',
   templateUrl: 'transfer-fund.html'
})
export class TransferFundComponent {

   formGroup: FormGroup;
   transfer: TransferDTO = new TransferDTO();
   nameDestinationUser: string;
   clicked: boolean = false;

   constructor(private formBuilder: FormBuilder,
      public transactionService: TransactionService,
      public accountService: AccountService,
      public storage: StorageUtil,
      public navController: NavController) {
      console.log('TransferFundComponent Component');

      this.formGroup = this.formBuilder.group({
         date: ['', [Validators.required]],
         amount: ['', [Validators.required]],
         accountNumberTo: ['', [Validators.required]],
         nameDestinationUser: ['', [Validators.required]]
      });
   }

   transferFunds() {
      this.clicked = true;
   
      this.storage.getUser().then(user => {
         this.transfer.accountNumber = user.accountNumber;
         this.transfer.idUser = user.idUser;

      }).then(() => {
         this.transactionService.transferFunds(this.transfer).subscribe((receipt) => {
            console.log('Transaction transfer funds', receipt);

            this.transfer = new TransferDTO();

            this.navController.push(ReceiptComponent, { receipt: receipt });
         }, error => {
            this.clicked = false;
         });
      });
   }

   selectDestinationAccount() {
      if (this.transfer.accountNumberTo) {
         console.log('Get destination account', this.transfer.accountNumberTo);
         this.accountService.getAccountByAccountNumber(this.transfer.accountNumberTo).subscribe(
            (accountUserDTO: AccountUserDTO) => {
               this.nameDestinationUser = accountUserDTO.name;
            },
            error => {
               this.nameDestinationUser = '';
            });
            
         } else {
            console.log('clear field');
            this.nameDestinationUser = '';
      }
   }

}
