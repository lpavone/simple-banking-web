import { CurrencyType } from './currency-type';

export class NewAccount {

   constructor(
      public name?: string,
      public address?: string,
      public phoneNumber?: string,
      public email?: string,
      public documentID?: string,
      public currency?: CurrencyType,
   ) {
   }

}