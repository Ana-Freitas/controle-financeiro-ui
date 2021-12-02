import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from '../core/error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { AuthService } from '../seguranca/auth.service';

@Component({
  selector: 'app-lancamentos-listagem',
  templateUrl: './lancamentos-listagem.component.html',
  styleUrls: ['./lancamentos-listagem.component.css']
})
export class LancamentosListagemComponent implements OnInit {

  lancamentos = [];

  constructor(
    private lancamentoService: LancamentoService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    private router: Router,
    public auth: AuthService){ }

  ngOnInit(): void {
    this.title.setTitle("Listagem de Lançamentos");
    this.pesquisar();
  }

  pesquisar(): void {
    this.lancamentoService.pesquisar()
      .then(resultado => {
        this.lancamentos = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  confirmarExclusao(lancamento: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }});
  }

  excluir(lancamento: any): void { 
    this.lancamentoService.excluir(lancamento.codigo)
    .then(() => {
      this.pesquisar();
      this.messageService.add({
        severity: 'success',
        detail: 'Lançamento excluído com sucesso!'
      });
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  abrirNovo(){
    this.router.navigate(['/lancamentos/novo']);
  }

}