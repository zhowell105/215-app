import { Component } from '@angular/core';
import { Citation } from '../citation';

export interface Person {
  name: string;
  age: number;
  occupation?: string;
}

@Component({
  selector: 'app-citations',
  standalone: true,
  imports: [],
  templateUrl: './citations.component.html',
  styleUrl: './citations.component.css'
})
export class CitationsComponent {

  person= {
    name: "Zoe' Howell",
    age: 21,
    occupation: "artist",
    pet: "Charlie",
  }

  friend = {
    firstName: "Jane",
    lastName: "Smith",
    job: "Doctor",
    dob: "01/01/1980"
  }
// person: Person= {}
  mom: Person = {
    name: "Mom",
    age: 60, 
    occupation: "Nurse"
  }

  personName= this.person.name;
  friendName= this.friend.firstName;

  myFirstCitation = new Citation(
    [{ firstName: "Zoe'", lastName: "Howell" }],
    new Date('01/01/2021'),
    'My First Book',
    'My First Publisher'
  )
}
