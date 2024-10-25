import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  firstName: string = 'Zoe';
  lastName: string = 'Howell';
  copyrightYear: number = new Date().getFullYear();

  ngOnInit(): void {}

  
  }

