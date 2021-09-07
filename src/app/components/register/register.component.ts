import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      username: new FormControl('', [
        Validators.minLength(4)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repite_password: new FormControl('', [])
    }, [this.validadorPassword])
  }

  ngOnInit() {
  }

  validadorPassword(form: AbstractControl) {
    const valorPassword = form.get('password')?.value;
    const repitePassword = form.get('repite_password')?.value;
    if (valorPassword === repitePassword) {
      return null
    } else {
      return { validadorPassword: true }
    }
  }

  checkControl(controlName: string, errorName: string): boolean {
    if (this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  async onSubmit() {
    const result = await this.usersService.register(this.formulario.value);
    if (result.affectedRows) {
      this.router.navigate(['/login']);
    }
  }
}
