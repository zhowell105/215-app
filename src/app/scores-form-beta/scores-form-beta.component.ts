import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-scores-form-beta',
  standalone: true,
  imports: [ReactiveFormsModule, FormGroup, FormControl],
  templateUrl: './scores-form-beta.component.html',
  styleUrls: ['./scores-form-beta.component.css']
})

export class ScoresFormBetaComponent implements OnInit {
  @Output() newGameAdded = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
     {week: new FormControl(1),
      opponent: new FormControl(''),
      ourScore: new FormControl(0),
      theirScore: new FormControl(0),
      outstandingPlayers: new FormControl(''),
    }};
  }
OnSubmit(){
  console.log(this.scoreForm.value);

  if (this.scoreForm.valid){
    const newGame: Game = {
      week: this.scoreForm.value.week,
      opponent: this.scoreForm.value.opponent,
      ourScore: this.scoreForm.value.ourScore,
      theirScore: this.scoreForm.value.theirScore,
      outstandingPlayers: this.scoreForm.value.outstandingPlayers
    };

    this.newGameAdded.emit(newGame);

    this.scoreForm.reset({
      week: this.scoreForm.value.week + 1,
      opponent: '',
      ourScore: 0,
      theirScore: 0,
      outstandingPlayers: ''
    });
  }
} }
