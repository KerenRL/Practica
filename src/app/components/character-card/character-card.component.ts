import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { DragonBallService } from '../../services/dragon-ball.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-character-card',
  standalone:true,
  imports:[CommonModule, RouterOutlet],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  characters: Character[] = [];
  meta: any;
  links: any;
  currentPage: number = 1;
  limit: number = 20;

  constructor(private dragonService: DragonBallService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.dragonService.getCharacters(page, this.limit).subscribe((response) => {
      this.characters = response.items;
      this.meta = response.meta;
      this.links = response.links;
      this.currentPage = page;
    });
  }
}