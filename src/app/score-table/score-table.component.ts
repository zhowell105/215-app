import { Component, inject} from '@angular/core';

export interface Game{
  id: number;
  week: number;
  opponent: string
  ourScore: number;
  theirScore: number;
  outstandingPlayer: string;
}
import { FooterComponent } from '../shared/footer/footer.component';
import { NgFor } from '@angular/common';
import { ScoresFormBetaComponent } from '../scores-form-beta/scores-form-beta.component';
import { GameDataService } from '../game-data.service';
import { GameDetailComponent } from '../game-detail/game-detail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-score-table',
  standalone: true,
  imports: [FooterComponent, NgFor, ScoresFormBetaComponent, RouterLink, GameDetailComponent],
  templateUrl: './score-table.component.html',
  styleUrl: './score-table.component.css'
})
export class ScoreTableComponent{
  gameData: GameDataService= inject(GameDataService);
  myName= "Zoe";
  games: Game[] = [];
  constructor(private gameDataService: GameDataService){
    this.games = this.gameDataService.getAllGames();
  }

  addNewGameToTable(newGame: Game){
    this.games.push(newGame);
  }
}
