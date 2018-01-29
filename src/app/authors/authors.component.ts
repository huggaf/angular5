import { Component, OnInit } from '@angular/core';
import { AuthorsService} from '../authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  title='Authors';
  authors: Object[];

  constructor(service: AuthorsService) {
    this.authors = service.index();
  }

  ngOnInit() {
  }

  appendAuthor():void{
    let i = this.authors.length;
    this.authors.push({id:i+1, name: `Author #${i+1}`});
  }
}
