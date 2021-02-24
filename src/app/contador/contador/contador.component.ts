import { Component }  from '@angular/core';

@Component({
    selector: 'app-contador',
    template: ` 
    <h1>{{titulo}}</h1>

    <span>la base es {{base}}</span>


    <button (click)="acumular(base)">+1</button>
    <button (click)=" acumular(-base) ">-1</button>

    <span> {{numero}} </span>

    `
})

 export class ContadorComponent{
    titulo: string = 'Contador App';
    numero : number = 0;

    base: number = 5;

    acumular(valor: number){
        this.numero += valor;
    }

}