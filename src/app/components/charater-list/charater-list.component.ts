import { Component, OnInit } from '@angular/core';
import { DragonBallService } from '../services/dragon-ball.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './charater-list.component.html',
  styleUrls: ['./charater-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: any[] = [];  

  constructor(private dragonBallService: DragonBallService) { }

  ngOnInit(): void {
    this.dragonBallService.getCharacters().subscribe(data => {
      this.characters = data;  
    });
  }
}