import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { Book } from './shared/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sectionAnim', [

      transition('* => void', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }),

        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*'
        })),

        animate(7000)
      ]),

      transition('* => void', [
        animate(50, style({
          transform: 'scale(1.05)'
        })),
  
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
  
        //scale down and fade out
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0 
        }))
      ]) 
    ])
  
  ]
})
export class AppComponent {
  title = 'book-club-website';
  isLoggedIn = false;
  books: Book[] = [];
  selectedBook: Book | undefined;
  booksId: string[] = ['7mmNEAAAQBAJ', 'sIEtjgEACAAJ', 'qbw4DwAAQBAJ', 'DxtkwAEACAAJ']


  loggedIn(event: any){
    this.isLoggedIn = true;
  }


  searchTerm: string = ''
  finalText: string = ''

  ngOnInit(): void {
    this.loadData();
  }
  constructor(public apiService: ApiService) { }

  assignSearchTerm(event: any) {
    this.finalText = this.finalText + event.data.toString().replace(' ', '+');
    console.log(this.finalText)
    this.searchTerm = this.finalText
  }
  loadData() {
    this.searchTerm = 'The cat in the hat'
    // this.apiService.getBooks(this.searchTerm).subscribe((data: any) => {
    //   this.books = data.items[0];
    //   console.log(this.books)
    // })

    // for (const key in this.booksId) {
    //   const value = this.booksId[Number(key)]
    //   console.log(value)
    //   this.apiService.getById(value).subscribe((data: any) => {
    //     this.books.push(data);
    //   })
    // }

    this.books = this.apiService.getBooksData();
    console.log(this.books)

  }

  step = 0;
  steps(){

    return this.step;
  }

  chooseLevel()
  {
    this.step++;
  }

  selectBook(book: Book)
  {
    this.step++;
    this.selectedBook = book;
  }
}
