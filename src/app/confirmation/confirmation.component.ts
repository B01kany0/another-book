import { Component, OnInit } from '@angular/core';

import arr from '../array';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {


  bee=arr;

  constructor() { }

  ngOnInit() {
  }

  //firstname=arr[0] ;
  //surname=arr[1];
 // email=arr[2];
 // checkin=arr[3];
 // checkout=arr[4]


}
