import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorate: boolean;
  constructor() {
    this.isFavorate = false;
  }

  onClick() {
    this.isFavorate = !this.isFavorate;
    console.log('star is clicked, now is ' + this.isFavorate);
  }

  ngOnInit() {
  }

}
