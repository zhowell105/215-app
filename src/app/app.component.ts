import { Component } from '@angular/core';
import { RouterLink, RouterModule} from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';//Import ProfilePageComponent
import { InterestsComponent } from './interests/interests.component';//Import InterestsComponent
import { FooterComponent} from './shared/footer/footer.component';//Import FooterComponent
import { CommonModule } from '@angular/common';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoresFormBetaComponent } from './scores-form-beta/scores-form-beta.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CssPlaygroundComponent } from './css-playground/css-playground.component';
import { CssPositioningComponent } from './css-positioning/css-positioning.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CitationsComponent } from './citations/citations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, InterestsComponent, ProfilePageComponent, ScoreTableComponent, ScoresFormBetaComponent, FooterComponent, RouterLink, CommonModule, GameDetailComponent, NotFoundComponent, CssPlaygroundComponent, CssPositioningComponent, MatBadgeModule, CitationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Zoe' Howell";
  day!: string;

  ngOnInit() {
    this.day = this.getDayOfWeek();
  }

  getDayOfWeek(): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
  }

  getTodayDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}
}

