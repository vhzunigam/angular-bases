import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

import { Character } from '../interfaces/character.interfaces';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuidv4(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuidv4(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuidv4(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuidv4(), ...character
    }
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index);
  // }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(c => c.id != id)
  }
}
