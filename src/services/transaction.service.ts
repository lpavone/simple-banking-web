import { DepositDTO } from '../model/deposit.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { ReceiptDTO } from '../model/receipt.dto';
import { TransferDTO } from '../model/transfer.dto';

@Injectable()
export class TransactionService {

   constructor(public httpClient: HttpClient) {      
   }

   getTransactionsByAccountNumber(accountNumber: number): Observable<ReceiptDTO[]> {
      return this.httpClient.get<ReceiptDTO[]>(`${API_CONFIG.baseUrl}/transaction/${accountNumber}`);
   }

   makeDeposit(depositDTO: DepositDTO): Observable<ReceiptDTO> {
      return this.httpClient.post<ReceiptDTO>(`${API_CONFIG.baseUrl}/transaction/deposit`, depositDTO);
   }

   transferFunds(transferDTO: TransferDTO): Observable<ReceiptDTO> {
      return this.httpClient.post<ReceiptDTO>(`${API_CONFIG.baseUrl}/transaction/transfer`, transferDTO);
   }
}