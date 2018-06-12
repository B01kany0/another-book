import { Component, OnInit } from '@angular/core';

import arr from '../array' ;

import {Bookform } from '../books'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
    Book(firstname,surname,email,checkin,checkout){
    

      let act = new Bookform(firstname,surname,email,checkin,checkout)

     


arr.push(act);
    console.log(arr) ;

    
    
    
    
    
     
    }
  }


  

