import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { HttpClientModule } from '@angular/common/http';
import { SegurancaModule } from './seguranca/seguranca.module';
import { AuthService } from './seguranca/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosListagemComponent } from './lancamentos-listagem/lancamentos-listagem.component';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'lancamentos', component: LancamentosListagemComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LancamentosModule,
    SegurancaModule,
    RouterModule.forRoot(routes),
    CoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
