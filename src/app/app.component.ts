import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';//Import ProfilePageComponent
import { InterestsComponent } from './interests/interests.component';//Import InterestsComponent
import { FooterComponent} from './shared/footer/footer.component';//Import FooterComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, InterestsComponent, ProfilePageComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoe';
  day!: string;

  ngOnInit() {
    this.day = this.getDayOfWeek();
  }

  getDayOfWeek(): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    return days[today.getDay()];
  }
}

