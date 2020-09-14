import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';


var current_date = new Date()
var cday = current_date.getDay()
console.log(cday);


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  mySlideOptions = {
    initialSlide: cday,  
    speed: 300,
    effect: 'flip',
  };


  constructor() {}
 


}

