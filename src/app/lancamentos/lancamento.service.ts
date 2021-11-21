import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../core/model';

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
}