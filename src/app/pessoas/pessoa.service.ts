import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'http://localhost:62173/pessoas';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {
    return this.http.get(this.pessoasUrl)
      .toPromise();
  }
}
