import { Injectable } from '@angular/core';
import { Game } from './score-table/score-table.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  private games: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([
      {week:1, opponent: "Erskine", ourScore: 3, theirScore: 0, outstandingPlayer: "John Doe", id:1},
      {week:2, opponent: "Coker", ourScore: 2, theirScore: 1, outstandingPlayer: "Jane Doe", id:2},
      {week:3, opponent: "Belmont Abbey", ourScore: 1, theirScore: 2, outstandingPlayer: "John Doe", id:3},
      {week:4, opponent: "Limestone", ourScore: 3, theirScore: 0, outstandingPlayer: "Jane Doe", id:4},
    ]);

  // getAllGames(){
  //   return this.games;
  // }
  get getAllGames$(): Observable<Game[]>{
      return this.games.asObservable();
    }

  getGameById(id: number): Game | undefined {
    return this.games.value.find(game => game.id === id);
  }

  addGame(game: Game){
    // this.games.push(game);
    const currentGames=this.games.value;
    this.games.next([...currentGames, game]);
  }
  constructor() { }
}
