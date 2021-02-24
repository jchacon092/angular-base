import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['thor','ironman','batman','captian america'];
  heroesborrados: string = '';

  BorrarHeroe(){

 
    this.heroesborrados =  this.heroes.shift() || '';
   //this.heroes = ['thor','ironman','batman',''];
  }
}
