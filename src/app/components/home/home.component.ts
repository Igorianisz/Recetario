import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  day: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  selectDay(){
    if (this.day){
      console.log(this.day);
    }
  }


}
