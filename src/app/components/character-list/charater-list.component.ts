import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-character-list',
  standalone:true,
  imports:[CharacterCardComponent ,RouterOutlet],
  templateUrl: './charater-list.component.html',
  styleUrls: ['./charater-list.component.css']
})
export class CharacterListComponent {
}