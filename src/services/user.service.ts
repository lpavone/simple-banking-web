import { AccountUserDTO } from '../model/account-user.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { UserDTO } from '../model/user.dto';

@Injectable()
export class UserService {

   constructor(public httpClient: HttpClient) {
   }

   getUserByIdUserAccountNumber(idUser: number, accountNumver: number): Observable<AccountUserDTO> {
      return this.httpClient.get<AccountUserDTO>(`${API_CONFIG.baseUrl}/user/${idUser}/${accountNumver}`);
   }

   updateUser(accountUserDTO: AccountUserDTO): Observable<UserDTO> {
      return this.httpClient.put<UserDTO>(`${API_CONFIG.baseUrl}/user/${accountUserDTO.idUser}`, accountUserDTO);
   }
}