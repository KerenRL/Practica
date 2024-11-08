import { Injectable } from '@angular/core';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  constructor() { }

  
  getCharacters() {
    return of([
      { name: 'Goku', image: 'https://example.com/goku.jpg' },
      { name: 'Vegeta', image: 'https://example.com/vegeta.jpg' },
      { name: 'Piccolo', image: 'https://example.com/piccolo.jpg' },
      { name: 'Gohan', image: 'https://example.com/gohan.jpg' },
      { name: 'Frieza', image: 'https://example.com/frieza.jpg' }
    ]);
  }
}