import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.pug',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {
  @Input('title') title: string;
  expanded: boolean;

  onClick(){
    this.expanded = !this.expanded;
  }

}
