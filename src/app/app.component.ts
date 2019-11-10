import { FavoriteChangeEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'hello-world App',
    isFavorite: true
  };

  onFavoriteChange(eventArgs: FavoriteChangeEventArgs) {
    console.log('Favorite change: ', eventArgs);
  }
}
