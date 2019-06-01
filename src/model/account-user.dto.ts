import { CurrencyTypeDTO } from './currency-type.dto';

export class AccountUserDTO {

   constructor(
      public name?: string,
      public address?: string,
      public phoneNumber?: string,
      public email?: string,
      public documentID?: string,
      public currency?: CurrencyTypeDTO,
      public idUser?: number,
      public accountNumber?: number,
   ) {
   }

}