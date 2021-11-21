import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { Lancamento } from 'src/app/core/model';
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categorias = [];
  pessoas = [];
  lancamento = new Lancamento();

  constructor(
    private categoriaService: CategoriaService,
    private pessoaService: PessoaService,
    private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: FormControl): void {
    this.lancamentoService.adicionar(this.lancamento)
      .then(() => {
        console.log('Lançamento adicionado com sucesso!');

        form.reset();
        this.lancamento = new Lancamento();
      })
      .catch((erro:any) => console.log(erro));
  }

  carregarCategorias(): any {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias
          .map((c:any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => console.log(erro));
  }

  carregarPessoas(): any {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map((p:any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => console.log(erro));
  }

}
