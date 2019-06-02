import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { UserDTO } from '../model/user.dto';

@Injectable()
export class LoginService {

   constructor(public httpClient: HttpClient) {
   }

   login(accountNumber: number): Observable<UserDTO> {
      return this.httpClient.get<UserDTO>(`${API_CONFIG.baseUrl}/login/${accountNumber ? accountNumber : ''}`);
   }
}