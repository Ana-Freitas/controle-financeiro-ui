import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  msg: any;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario:string, senha:string){
    this.auth.login(usuario, senha).then(() => {
      this.router.navigate(['/lancamentos']);
    }).catch(() => {
      this.msg = 'Usuário e/ou senha inválida!';
    });
  }

}
