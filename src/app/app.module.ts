import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/charater-list/charater-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { DragonBallService } from './components/services/dragon-ball.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,  
    CharacterCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DragonBallService],
  bootstrap: [AppComponent]
})
export class AppModule { }