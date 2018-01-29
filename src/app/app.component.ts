import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tweet = {
    body: 'Lorem ipsum dolor sit amet...',
    totalLikes: 46,
    isLiked: false
  }
}
