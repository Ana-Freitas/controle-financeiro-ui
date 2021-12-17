import { LancamentoFiltro } from './../lancamento.service';
import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LancamentoService } from '../lancamento.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamentos-listagem',
  templateUrl: './lancamentos-listagem.component.html',
  styleUrls: ['./lancamentos-listagem.component.css']
})
export class LancamentosListagemComponent implements OnInit {

  descricao?: string;
  dataVencimentoInicio?: Date ;
  dataVencimentoFim?: Date;
  lancamentos = [] ;

  constructor(private lancamentoService: LancamentoService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private title: Title,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.title.setTitle('Listagem de Lançamentos');
    this.pesquisar();
  }

  pesquisar(): void {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio ,
      dataVencimentoFim: this.dataVencimentoFim
    }

    this.lancamentoService.pesquisar(filtro)
      .then((resultado: never[]) => this.lancamentos = resultado)
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  confirmarExclusao(lancamento: any): void {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(lancamento: any): void {
    this.lancamentoService.excluir(lancamento.codigo)
      .then(() => {
        this.pesquisar();
        this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' });
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

}
