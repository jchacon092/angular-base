import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    Nombre : string = "Ironman";
    edad: number = 40;

    get nombreCapitalizado(): string{
       return  this.Nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.Nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.Nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30;
    }

}