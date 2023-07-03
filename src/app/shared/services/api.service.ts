import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as booksData from '../books.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  booksData: any = booksData;
  apiKey = 'AIzaSyDXV8l4ALkIEg_O-d780YMd4IrINblvGfA'
  apiEndpoint = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private _httpClient: HttpClient) {
    console.log('booksData', this.booksData[0])
  }

  
  getBooks(searchTerm: string): Observable<any[]> {
    const max = '&maxResults=5';
   return this._httpClient.get<any[]>(this.apiEndpoint + '?q=' + searchTerm + '&key=' + this.apiKey )
  }

  getBooksData(): any[] {

    return this.booksData.default;
  }
  getById(id: string): Observable<any> {
    const max = '&maxResults=5';
   return this._httpClient.get<any[]>(this.apiEndpoint + '/' + id + '?key=' + this.apiKey )
  }
}
