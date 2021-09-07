import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(pForm: any) {
    const result = await this.usersService.login(pForm.value);
    //aqui tendre que guardar el token en el localstorage para que el resto de mi aplicacion sepa que estoy logado.
    if (result.token) {
      localStorage.setItem('token', result.token);
      this.router.navigate(['/profile'])
    } else {
      alert('Usuario o contraseña erroneos');
    }

  }
}
