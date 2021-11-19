import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule} from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';import { LancamentosListagemComponent } from '../lancamentos-listagem/lancamentos-listagem.component';
''


@NgModule({
  declarations: [
    LancamentosListagemComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ],
  exports: [
    LancamentosListagemComponent
  ]
})
export class LancamentosModule { }
