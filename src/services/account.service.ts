import { AccountUserDTO } from '../model/account-user.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AccountService {

   constructor(public httpClient: HttpClient) {      
   }

   createAccount(accountUser: AccountUserDTO): Observable<number> {
      return this.httpClient.post<number>(`${API_CONFIG.baseUrl}/account`, accountUser);
   }
}