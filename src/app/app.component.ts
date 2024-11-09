import { Component } from '@angular/core';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CharacterCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dragon-ball-app';
}