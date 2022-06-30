import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostrarEnlaces = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEnlaces() {
    if (this.mostrarEnlaces) {
      this.mostrarEnlaces = false;
    
    } else  {
      this.mostrarEnlaces = true;
    }
  }

}
