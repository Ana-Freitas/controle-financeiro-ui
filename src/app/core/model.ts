import * as moment from 'moment';

export class Pessoa {
  codigo: number;
}

export class Categoria {
  codigo: number;
}

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();

  static toJson(lancamento: Lancamento): any {
    return {
      codigo: lancamento.codigo,
      tipo: lancamento.tipo,
      descricao: lancamento.descricao,
      dataVencimento: moment(lancamento.dataVencimento).format('DD/MM/YYYY'),
      dataPagamento: moment(lancamento.dataPagamento).format('DD/MM/YYYY'),
      valor: lancamento.valor,
      pessoa: lancamento.pessoa,
      categoria: lancamento.categoria
    };
  }
}