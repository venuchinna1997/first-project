import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  dateMessage : string = '';
  someNumber : number = 10;

  constructor() {
    setInterval(() => {
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + " " + currentDate.toLocaleTimeString();
    }, 1000);
    
  }

  addTwoNumbers(a:number, b:number){
    return a + b;
  }

}
