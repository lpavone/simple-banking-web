export class BalanceDTO {

   constructor(
      public accountNumber?: number,
      public currency?: string,
      public amount?: number,
   ) {
   }

}