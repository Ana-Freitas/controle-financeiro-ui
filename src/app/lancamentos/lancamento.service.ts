import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../core/model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.lancamentosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<Lancamento>(this.lancamentosUrl, Lancamento.toJson(lancamento), { headers })
      .toPromise();
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`).toPromise()
    .then(() => null);
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, Lancamento.toJson(lancamento), { headers })
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response;

        this.converterStringsParaDatas([lancamentoAlterado]);

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get<Lancamento>(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const lancamento = response;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]): void {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'DD/MM/YYYY').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'DD/MM/YYYY').toDate();
      }
    }
  }

}