import { LancamentoService } from './../lancamentos/lancamento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../seguranca/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaService } from '../pessoas/pessoa.service';
import { CategoriaService } from '../categorias/categoria.service';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    LancamentoService,
    PessoaService,
    CategoriaService
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }