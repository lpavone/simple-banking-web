export class DepositDTO {

   constructor(
      public accountNumber?: number,
      public idUser?: number,
      public date?: Date,
      public amount?: number,
   ) {
   }

}