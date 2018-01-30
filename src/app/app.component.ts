import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 5 :)'
  tweet = {
    body: 'Lorem ipsum dolor sit amet...',
    totalLikes: 46,
    isLiked: false
  }
}
