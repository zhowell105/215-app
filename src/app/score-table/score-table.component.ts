import { Component, inject, OnInit} from '@angular/core';

export interface Game{
  id: number;
  week: number;
  opponent: string
  ourScore: number;
  theirScore: number;
  outstandingPlayer: string;
}
import { FooterComponent } from '../shared/footer/footer.component';
import { NgFor, NgIf } from '@angular/common';
import { ScoresFormBetaComponent } from '../scores-form-beta/scores-form-beta.component';
import { GameDataService } from '../game-data.service';
import { GameDetailComponent } from '../game-detail/game-detail.component';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { combineLatest, from, Observable } from 'rxjs';
import { BreakpointService } from '../breakpoint.service';
import { addSyntheticLeadingComment } from 'typescript';

@Component({
  selector: 'app-score-table',
  standalone: true,
  imports: [FooterComponent, NgFor, ScoresFormBetaComponent, RouterLink, GameDetailComponent, MatTableModule, NgIf],
  templateUrl: './score-table.component.html',
  styleUrl: './score-table.component.css'
})
export class ScoreTableComponent implements OnInit{
  gameDataService: GameDataService= inject(GameDataService);
  breakpointService: BreakpointService= inject(BreakpointService);

  gameColumns: string[]= ['week', 'opponent', 'score', 'outstandingPlayer', 'narrative', 'record'];
  games= new MatTableDataSource<Game>([]);

  isHandsetPortrait$!:Observable<boolean>;
  isHandsetLandscape$!:Observable<boolean>;
  notAHandset$!:Observable<boolean>;
  showHandsetMessage = false;

  ngOnInit(): void {
    this.gameDataService.getAllGames$.subscribe((gameData) => {
      this.games.data= gameData;
    });

      this.isHandsetPortrait$= this.breakpointService.isHandsetPortrait$;
      this.isHandsetLandscape$= this.breakpointService.isHandsetLandscape$;
      this.notAHandset$= this.breakpointService.notAHandset$;

      combineLatest([this.isHandsetPortrait$, this.isHandsetLandscape$]).subscribe(([portrait, landscape]) => {
        if (portrait === true) {
          console.log('Portrait');
          this.showHandsetMessage = true;
          this.gameColumns = ['week', 'opponent', 'score'];
        } else if (landscape) {
          this.showHandsetMessage = true;
          this.gameColumns = ['week', 'opponent', 'score'];
        } else {
          console.log('Web');
          this.showHandsetMessage = false;
          this.gameColumns = ['week', 'opponent', 'score', 'outstandingPlayer', 'narrative', 'record'];
        }
      });
  }

  generateNarrative(game: Game): string {
    if (game.ourScore > game.theirScore) {
      return `Let's go Trojans! We beat ${game.opponent}`;
    } else if (game.ourScore < game.theirScore) {
      return `We lost to ${game.opponent}`;
    }
    else {
      return `We tied with ${game.opponent}`;
    }
    // the lowercased game can be changed to addSyntheticLeadingComment. What matters is that Game is put there to know where the info comes from.
  }
  generateRecord(startPoint: number, setSize: number):string{
    const setOfGames= this.games.data.slice(Math.max(0, startPoint - setSize + 1), startPoint + 1);
    return setOfGames.map((game) =>{
      if (game.ourScore > game.theirScore){
        return 'W';
      }
      else if (game.ourScore < game.theirScore){
        return 'L';
      }
      else{
        return 'T';
      }
    }).join('');
    
  }
  myName = "Zoe'";
}



  // games: Game[] = [];
  // constructor(private gameDataService: GameDataService){
  //   this.games.data = this.gameDataService.getAllGames();
  
  


  // addNewGameToTable(newGame: Game){
  //   this.games.push(newGame);
  // }

