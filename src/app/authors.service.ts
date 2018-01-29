import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  index(){
    return [
      {id:1, name: 'Stephen King'},
      {id:2, name: 'J. K. Rowling'},
      {id:3, name: 'George Orwell'},
      {id:4, name: 'Dan Brown'}
    ];

  }

}
