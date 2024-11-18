import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {

  wealth=100;
  carPayment= 250;
  salary=100;

  constructor(){
    this.greet("Zoe'", 21, "Hello");
    this.detailedGreeting({ age: 21, name: "Zoe'", greeting: "Hello"});
    this.greet('Sue', 30, 'Happy Birthday', 'Smith');
    this.greet('Anna', 13, 'Good Morning');

    this.greetPersonWith("Good morning");
    this.getRich();
    this.inheritMoney().then((money)=> {
      console.log('Banking my inheritance...');
      this.wealth += money;
      this.checkBalance();
    }).catch((error) => {
      console.error('Error getting inheritance', error);
    });

  }

  delay(ms: number){
    return new Promise((resolve) => setTimeout(resolve, ms));
    // if there's a delay, I'll get bak with your on the response
  }

  async getRich(){
    console.log('Getting rich...');
    await this.delay(5000);
    // milliseconds=5 seconds
    this.wealth += 1000;
    console.log('You are now rich!');
    this.checkBalance();
  }

  async inheritMoney(): Promise<number>{
    console.log('Reading will...');
    await this.delay(10000);
    return 5000;
  }
  greetPersonWith (greeting:string) {
   console.log(`Hello! ${greeting}!`);
  }

  greet(firstName:string, age: number, greeting: string= "Hello", lastName?: string){
    console.log (`${greeting}, ${firstName} ${lastName? '' +lastName: ''}! You are officially ${age} years old!`);
  }

  detailedGreeting({
    name,
    greeting,
    age,
  }:{
    name: string;
    greeting: string;
    age: number;
  }){
    console.log(`Glad to see you again, ${name}! ${greeting}! You are officially ${age} years old!`);
  }
  

  ngAfterViewInit(): void{
    this.checkBalance();
  }

  getPaid(){
    this.wealth += this.salary;
    this.checkBalance();
  }
  
  getPromoted(){
    this.salary *= 1.25;
    this.getPaid();
  }

  payCar (){
    this.wealth -= this.carPayment;
    this.checkBalance();
  }

  checkBalance(){
    const paymentButton= document.getElementById('car-payment');
    if(paymentButton){


    if(this.wealth < this.carPayment){
      // alert("You can't afford to pay your car payment!");
    
      paymentButton.setAttribute("disabled", "true");
    } else{ 
      paymentButton.removeAttribute("disabled");

    }
  }
  }
}
