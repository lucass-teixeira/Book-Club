import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Book } from '../shared/services/models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  books: Book[] = []
  ngOnInit(): void {
      // this.loadData();
  }
  constructor(public apiService: ApiService) {}

  loadData(searchTerm: any){
    console.log(searchTerm);
    // this.apiService.getBooks(searchTerm).subscribe((data) => {
    //   this.books = data
    // })
  }
}
