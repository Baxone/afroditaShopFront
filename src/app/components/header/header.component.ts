import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    const token = localStorage.getItem('token');
    this.logado = (token !== null) ? true : false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
