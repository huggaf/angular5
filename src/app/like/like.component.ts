import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.pug',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input('total-likes') totalLikes: number;
  @Input('is-liked') isLiked: boolean;

  constructor() { }

  onClick(): void{
    this.totalLikes += (this.isLiked ? -1 : 1);
    this.isLiked = !this.isLiked;
  }
}
