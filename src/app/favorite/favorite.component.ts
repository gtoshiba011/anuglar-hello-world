import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface FavoriteChangeEventArgs {
  newValue: boolean
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: [`
.glyphicon {
  color: green;
}
.glyphicon-star {
  background: black;
}
`]
})
export class FavoriteComponent {

  // alias input property
  @Input('isFavorite') isSelected: boolean;

  // output property
  @Output('change') click = new EventEmitter();

  constructor() {
    this.isSelected = false;
  }

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }

}
