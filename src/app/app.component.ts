import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


apareceNatela = '';

usuario = localStorage.getItem('nome');

  constructor(){
    this.getLocalstorage();
  }


  // tslint:disable-next-line: typedef
  getLocalstorage(){

    this.usuario = localStorage.getItem('nome');


  }

  // tslint:disable-next-line: typedef
  salvarLocalstorage() {

    const usuario: string = this.apareceNatela;

    localStorage.setItem ('nome', usuario);
    this.usuario = localStorage.getItem('nome');
  }




  }



