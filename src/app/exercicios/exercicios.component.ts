import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

  HelloWorld = 'olá mundo.';
  href = 'https://www.google.com.br';

  corDaFonte = 'red';
  
  setCorFonte(){
    if(this.corDaFonte=='red'){
      this.corDaFonte='green'
    }else {
      this.corDaFonte='red'
    }
  }

  fontFamily=''
  setFontFamily(value: string){
    this.fontFamily=value
  }
}
