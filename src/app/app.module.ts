import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { HttpClientModule } from '@angular/common/http';
import { LancamentosListagemComponent } from './lancamentos-listagem/lancamentos-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LancamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
