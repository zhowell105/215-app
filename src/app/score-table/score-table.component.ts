import { Component } from '@angular/core';

interface Game{
  week: number;
  opponent: string
  ourScore: number;
  theirScore: number;
  outstandingPlayer: string;
}
import { FooterComponent } from '../shared/footer/footer.component';
import { NgFor } from '@angular/common';
import { ScoresFormBetaComponent } from '../scores-form-beta/scores-form-beta.component';

@Component({
  selector: 'app-score-table',
  standalone: true,
  imports: [FooterComponent, NgFor, ScoresFormBetaComponent],
  templateUrl: './score-table.component.html',
  styleUrl: './score-table.component.css'
})
export class ScoreTableComponent {

  games: Game[] = [
    {week:1,opponent: "Erskine", ourScore: 3, theirScore: 0, outstandingPlayer: "John Doe"},
    {week:2,opponent: "Coker", ourScore: 2, theirScore: 1, outstandingPlayer: "Jane Doe"},
    {week:3,opponent: "Belmont Abbey", ourScore: 1, theirScore: 2, outstandingPlayer: "John Doe"},
    {week:4,opponent: "Limestone", ourScore: 3, theirScore: 0, outstandingPlayer: "Jane Doe"},
  ];

  addNewGameToTable(newGame: Game){
    this.games.push(newGame);
  }
}
