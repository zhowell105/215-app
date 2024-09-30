import { Routes} from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InterestsComponent } from './interests/interests.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { ScoreFormComponent } from './score-form/score-form.component';

export const routes: Routes = [
    {path: "app-profile-page", component: ProfilePageComponent},
    {path: "app-interests", component: InterestsComponent},
    {path: "scores", component: ScoreTableComponent},
    {path: "score-form", component: ScoreFormComponent},
    {path: '', redirectTo: '/profile', pathMatch: 'full'},
    {path: '**', redirectTo: '/profile'},
];
