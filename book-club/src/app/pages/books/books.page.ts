import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Book } from 'src/app/shared/services/models';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

  books: any[] = []
  searchTerm: string = ''
  finalText: string = ''

  ngOnInit(): void {
    // this.loadData();
  }
  constructor(public apiService: ApiService) { }

  assignSearchTerm(event: any) {
    this.finalText = this.finalText + event.data.toString().replace(' ', '+');
    console.log(this.finalText)
    this.searchTerm = this.finalText
  }
  loadData() {
    console.log(this.searchTerm)
    this.apiService.getBooks(this.searchTerm).subscribe((data: any) => {
      this.books = data.items;
      console.log(this.books)
    })
  }


}
