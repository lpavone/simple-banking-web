import { DepositDTO } from './../model/deposit.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DepositService {

   constructor(public httpClient: HttpClient) {      
   }

   makeDeposit(depositDTO: DepositDTO): Observable<number> {
      return this.httpClient.post<number>(`${API_CONFIG.baseUrl}/deposit`, depositDTO);
   }
}