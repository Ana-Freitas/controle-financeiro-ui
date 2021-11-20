import { Component, OnInit } from '@angular/core';
import { LancamentoService } from '../lancamentos/lancamento.service';

@Component({
  selector: 'app-lancamentos-listagem',
  templateUrl: './lancamentos-listagem.component.html',
  styleUrls: ['./lancamentos-listagem.component.css']
})
export class LancamentosListagemComponent implements OnInit {

  lancamentos = [];

  constructor(private lancamentoService: LancamentoService){ }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.lancamentoService.pesquisar()
      .then(resultado => {
        this.lancamentos = resultado;
      });
  }

}