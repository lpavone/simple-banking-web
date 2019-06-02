export class ReceiptDTO {

   constructor(
      public accountNumber?: number,
      public userName?: string,
      public transactionDate?: Date,
      public amount?: number,
      public description?: string,
   ) {
   }

}