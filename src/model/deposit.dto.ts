export class DepositDTO {

   constructor(
      public idUser?: number,
      public accountNumber?: number,
      public date?: Date,
      public ammount?: number,
   ) {
   }

}