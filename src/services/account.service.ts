import { BalanceDTO } from './../model/balance.dto';
import { AccountUserDTO } from '../model/account-user.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { UserDTO } from '../model/user.dto';

@Injectable()
export class AccountService {

   constructor(public httpClient: HttpClient) {      
   }

   getAccountByAccountNumber(accountNumber: number): Observable<AccountUserDTO> {
      return this.httpClient.get<AccountUserDTO>(`${API_CONFIG.baseUrl}/account/${accountNumber}`);
   }

   getBalanceByAccountNumber(accountNumber: number): Observable<BalanceDTO> {
      return this.httpClient.get<BalanceDTO>(`${API_CONFIG.baseUrl}/account/${accountNumber}/balance`);
   }

   createAccount(accountUser: AccountUserDTO): Observable<number> {
      return this.httpClient.post<number>(`${API_CONFIG.baseUrl}/account`, accountUser);
   }

   getAccountUserByIdUserAccountNumber(idUser: number, accountNumber: number): Observable<AccountUserDTO> {
      return this.httpClient.get<AccountUserDTO>(`${API_CONFIG.baseUrl}/account/user/${idUser}/${accountNumber}`);
   }

   updateAccountUser(accountUserDTO: AccountUserDTO): Observable<UserDTO> {
      return this.httpClient.put<UserDTO>(`${API_CONFIG.baseUrl}/account/user/${accountUserDTO.idUser}`, accountUserDTO);
   }

}