import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgModule } from '@angular/core';

import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { LancamentosListagemComponent } from '../lancamentos-listagem/lancamentos-listagem.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea'
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LancamentosListagemComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    LancamentosListagemComponent,
    LancamentoCadastroComponent
  ]
})
export class LancamentosModule { }