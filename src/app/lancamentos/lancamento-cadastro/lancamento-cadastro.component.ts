import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
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
    private lancamentoService: LancamentoService,
    private errorHandler: ErrorHandlerService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    ) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.params['codigo'];
    this.title.setTitle("Cadastro de Lançamentos");
    if(codigo){
      this.carregarLancamento(codigo);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  salvar(form: NgForm): void {
        if(this.editando){
          this.atualizarLancamento(form);
        }else{
          this.adicionarLancamento(form);
        }
  }

  carregarCategorias(): any {
    return this.categoriaService.listarTodas()
      .then(categorias => {
        this.categorias = categorias
          .map((c:any) => ({ label: c.nome, value: c.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoas(): any {
    this.pessoaService.listarTodas()
      .then(pessoas => {
        this.pessoas = pessoas
          .map((p:any) => ({ label: p.nome, value: p.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando(): boolean {
    return Boolean(this.lancamento.codigo);
  }
  carregarLancamento(codigo: number): void {
    this.lancamentoService.buscarPorCodigo(codigo)
    .then(lancamento => {
      this.lancamento = lancamento;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  adicionarLancamento(form: NgForm){
    this.lancamentoService.adicionar(this.lancamento)
    .then(lancamento => {
      
      this.messageService.add(
        {
          severity: 'success', 
          detail: 'Lançamento adicionado com sucesso!'
        });

      this.router.navigate(['/lancamentos', lancamento.codigo]);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarLancamento(form: NgForm){
    this.lancamentoService.atualizar(this.lancamento)
    .then(lancamento => {
      this.lancamento = lancamento;
      this.messageService.add(
        {
          severity: 'success', 
          detail: 'Lançamento alterado com sucesso!'
        });
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Lancamento());
    this.router.navigate(['/lancamentos/novo'])
  }
}
