import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InterestsComponent } from './interests/interests.component';
import { FooterComponent } from './shared/footer/footer.component';


export const routes: Routes = [];
[{path: "profile", component: ProfilePageComponent},
{path: "interests", component: InterestsComponent},
{path: '', redirectTo: '/profile', pathMatch: 'full'},
{path: '**', redirectTo: '/profile'},
];
