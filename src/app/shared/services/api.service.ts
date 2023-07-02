import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = 'AIzaSyDXV8l4ALkIEg_O-d780YMd4IrINblvGfA'
  apiEndpoint = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private _httpClient: HttpClient) {
  }

  
  getBooks(searchTerm: string): Observable<any[]> {
    const max = '&maxResults=5';
   return this._httpClient.get<any[]>(this.apiEndpoint + '?q=' + searchTerm + '&key=' + this.apiKey )
  }

  getById(id: string): Observable<any> {
    const max = '&maxResults=5';
   return this._httpClient.get<any[]>(this.apiEndpoint + '/' + id + '?key=' + this.apiKey )
  }
}
