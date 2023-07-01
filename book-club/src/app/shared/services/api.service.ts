import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from './models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = 'AIzaSyDTWriLYmv6HHkoaMF0KNSuGa0QwK1Kb70'
  apiEndpoint = 'https://www.googleapis.com/books/v1/volumes'
  constructor(private _httpClient: HttpClient) {
  }

  
  getBooks(searchTerm: string): Observable<any[]> {
    const max = '&maxResults=5';
   return this._httpClient.get<any[]>(this.apiEndpoint + '?q=' + searchTerm + '&key=' + this.apiKey )
  }
}
