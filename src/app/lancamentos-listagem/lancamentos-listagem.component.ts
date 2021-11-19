import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-listagem',
  templateUrl: './lancamentos-listagem.component.html',
  styleUrls: ['./lancamentos-listagem.component.css']
})
export class LancamentosListagemComponent implements OnInit {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '31/01/2021',
      dataPagamento: null, valor: 4.55, pessoa: 'Juliana da Silva' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/01/2021',
      dataPagamento: null, valor: 1431, pessoa: 'Eliana dos Santos' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/01/2021',
      dataPagamento: '09/01/2021', valor: 1750, pessoa: 'Mariana Ferreira' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '15/01/2021',
      dataPagamento: '10/01/2021', valor: 180, pessoa: 'Ana Lima' },
    { tipo: 'RECEITA', descricao: 'Salário Mensal', dataVencimento: '',
      dataPagamento: '10/01/2021', valor: 1890, pessoa: 'Mariana' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
