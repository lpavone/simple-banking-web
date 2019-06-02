import { StorageUtil } from './../../util/storage-util';
import { NavController } from 'ionic-angular';
import { DepositDTO } from './../../model/deposit.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ReceiptComponent } from '../receipt/receipt';


@Component({
   selector: 'make-deposit',
   templateUrl: 'make-deposit.html'
})
export class MakeDepositComponent {

   formGroup: FormGroup;
   deposit: DepositDTO = new DepositDTO();
   clicked: boolean = false;

   constructor(
      public formBuilder: FormBuilder,
      public transactionService: TransactionService,
      public navController: NavController,
      public storage: StorageUtil) {
      console.log('MakeDepositComponent Component');

      this.configureFormGroup();
   }

   private configureFormGroup() {
      this.formGroup = this.formBuilder.group({
         date: ['', [Validators.required]],
         amount: ['', [Validators.required]]
      });
   }

   makeDeposit() {
      this.clicked = true;

      this.storage.getUser().then(user => {
         this.deposit.accountNumber = user.accountNumber;
         this.deposit.idUser = user.idUser;

      }).then(() => {
         this.transactionService.makeDeposit(this.deposit).subscribe((receipt) => {
            console.log('Transaction receipt', receipt);
   
            this.deposit = new DepositDTO();
   
            this.navController.push(ReceiptComponent, { receipt: receipt });
         }, error => {
            this.clicked = false;
         });
      });
   }

}
