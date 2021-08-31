import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  constructor(
    private _dbzService: DbzService
  ){}

  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this._dbzService.personajes;
  }
}
