import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDataService } from '../game-data.service';
import { Game } from '../score-table/score-table.component';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.css'
})
export class GameDetailComponent {
  route:ActivatedRoute= inject(ActivatedRoute);
  gameDataService: GameDataService= inject(GameDataService);

  gameId:number= Number(this.route.snapshot.paramMap.get('id'));
  game: Game | undefined;

  constructor () {
    this.game = this.gameDataService.getGameById(this.gameId);
  }

  

}

