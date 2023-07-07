import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as booksData from '../books.json';
import * as a1level from '../a1level.json';
import * as bc from '../bookClubs.json';
import { BookClub, BookStudy, WordInfo } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  booksData: any = booksData;
  a1Books: any = a1level;
  bookClubs: any = bc;
  apiKey = 'AIzaSyDXV8l4ALkIEg_O-d780YMd4IrINblvGfA'
  apiEndpoint = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private _httpClient: HttpClient) {
    console.log('booksData', this.booksData[0])
  }


  getBooks(searchTerm: string): Observable<any[]> {
    const max = '&maxResults=5';
    return this._httpClient.get<any[]>(this.apiEndpoint + '?q=' + searchTerm + '&key=' + this.apiKey)
  }

  getBooksData(): any[] {

    return this.booksData.default;
  }
  getById(id: string): Observable<any> {
    const max = '&maxResults=5';
    return this._httpClient.get<any[]>(this.apiEndpoint + '/' + id + '?key=' + this.apiKey)
  }

  getA1level(): BookStudy {

    return this.a1Books.default[0];
  }

  getBookClubs(): BookClub[] {
    return this.bookClubs.default;
  }

  getDataFinished(): WordInfo[] {
    const data = this.a1Books.default[0];

    // Use regex pattern to match words
    const pattern = /[a-zA-Z]+/g;
    const words = data.text.match(pattern);

    const list: WordInfo[] = []

    words.forEach((word: string, index: number) => {
      const id = index + 1;

      let isKnown = false;
      const unkwonWords = ['siblings', 'ensues', 'various', 'mischievous', 'stain']
      if(unkwonWords.includes(word))
      {
        isKnown = true;
      }
      const element: WordInfo = {text: word, id: id, definition: undefined, isKnown: isKnown, isSelected: false}
      list.push(element);
    });

    return list;
  }


}
