import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Subscription } from 'rxjs';
import { Book } from '../model/book.model';
import { BooksService } from '../services/books.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  
})
export class BookListComponent implements OnInit {

  books!: Book[];
  booksSubscription!: Subscription;
  image_essai!:any;

  constructor(private booksService: BooksService, private router: Router) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.emitBooks();
    this.image_essai = this.getBookImage(0);
    

  }

  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  onDeleteBook(book: Book) {
    this.booksService.removeBook(book);
  }

  getBookImage(i:number) {
    var ImageRef = firebase.database().ref('/books/' + i + '/photo');
    ImageRef.on('value', (snapshot) =>{
      return (snapshot.val());
    });
  }

  onPreventDefault(e:Event){
    e.preventDefault();
  }


  
    
  

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }




}
