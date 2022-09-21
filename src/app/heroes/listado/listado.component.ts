import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})


export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Hulk', 'WonderWoman', 'Thor', 'Capitan America', 'Superman'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';



  }

}



