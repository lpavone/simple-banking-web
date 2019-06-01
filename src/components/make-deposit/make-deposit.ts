import { DepositService } from './../../services/deposit.service';
import { DepositDTO } from './../../model/deposit.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
   selector: 'make-deposit',
   templateUrl: 'make-deposit.html'
})
export class MakeDepositComponent {

   formGroup: FormGroup;

   deposit: DepositDTO = new DepositDTO();

   constructor(
      public formBuilder: FormBuilder,
      public depositService: DepositService) {
      console.log('Hello MakeDepositComponent Component');

      this.configureFormGroup();
   }

   private configureFormGroup() {
      this.formGroup = this.formBuilder.group({
         date: ['', [Validators.required]],
         ammount: ['', [Validators.required]]
      });
   }

   makeDeposit() {
      this.depositService.makeDeposit(this.deposit).subscribe((id) => {
         console.log('Transaction id', id);

         this.deposit = new DepositDTO();
      });
   }

}
