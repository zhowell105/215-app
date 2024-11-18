import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InterestsComponent } from './interests/interests.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CssPlaygroundComponent } from './css-playground/css-playground.component';
import { CssPositioningComponent } from './css-positioning/css-positioning.component';
import { CitationsComponent } from './citations/citations.component';

export const routes: Routes = [
    { path: "app-profile-page", component: ProfilePageComponent },
    { path: "app-interests", component: InterestsComponent },
    { path: "scores", component: ScoreTableComponent },
    // { path: "scores-form-beta", component: ScoresFormBetaComponent },
    { path: "game-details/:id", component: GameDetailComponent },
    {path: "citations", component: CitationsComponent},

    {path: 'css-playground', component: CssPlaygroundComponent},
    {path: 'css-positioning', component: CssPositioningComponent},
    { path: '', component: ProfilePageComponent, pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
