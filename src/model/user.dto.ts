import { CurrencyTypeDTO } from './currency-type.dto';

export interface UserDTO {
   idUser: number;
   name: string;
   accountNumber: number;
   currency: CurrencyTypeDTO;
}