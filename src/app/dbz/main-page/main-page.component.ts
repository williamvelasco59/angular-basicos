import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  constructor(){}

  nuevo: Personaje = {
    nombre: 'maestro roshi',
    poder: 1000
  }


  

  // cambiarNombre( event: any ){
  //   console.log(event.target.value);
  // }

  

}
