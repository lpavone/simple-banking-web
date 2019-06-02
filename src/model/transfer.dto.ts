export class TransferDTO {

   constructor(
      public accountNumber?: number,
      public idUser?: number,
      public date?: Date,
      public amount?: number,
      public accountNumberTo?: number,
   ) {
   }

}