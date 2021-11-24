import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any): void {
    let msg: string;

    if(typeof errorResponse === 'string') {
      msg = errorResponse;
    }else{
      msg = 'Erro ao processar serviço remoto'
      console.error('Ocorreu um erro: ', errorResponse);
    }

    this.messageService.add({
      severity: 'error',
      detail: msg
    })
  }
}
