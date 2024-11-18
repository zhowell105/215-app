import { Component, inject, OnInit} from '@angular/core';
import {FormControl,FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Game } from '../score-table/score-table.component';
import { GameDataService } from '../game-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-scores-form-beta',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './scores-form-beta.component.html',
  styleUrls: ['./scores-form-beta.component.css']
})

export class ScoresFormBetaComponent implements OnInit {
  gameDataService: GameDataService= inject(GameDataService);
  // @Output() newGameAdded = new EventEmitter<Game>();

  scoreForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.scoreForm = new FormGroup({
      id: new FormControl(0),
      week: new FormControl(1),
      opponent: new FormControl(''),
      ourScore: new FormControl(0),
      theirScore: new FormControl(0),
      outstandingPlayers: new FormControl(''),
    });
  }
OnSubmit(){
  console.log(this.scoreForm.value);

  if (this.scoreForm.valid){
    const newGame: Game = {
      id: Math.floor(Math.random() * 1000000000),
      week: this.scoreForm.value.week,
      opponent: this.scoreForm.value.opponent,
      ourScore: this.scoreForm.value.ourScore,
      theirScore: this.scoreForm.value.theirScore,
      outstandingPlayer: this.scoreForm.value.outstandingPlayers
    };

    this.gameDataService.addGame(newGame);

    this.scoreForm.reset({
      week: this.scoreForm.value.week + 1,
      opponent: '',
      ourScore: 0,
      theirScore: 0,
      outstandingPlayers: ''
    });
  }
} }
