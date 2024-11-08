import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/charater-list/charater-list.component';

export const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: '**', redirectTo: '' }, 
];