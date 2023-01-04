import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-typist',
  templateUrl: './typist.component.html',
  styleUrls: ['./typist.component.css']
})
export class TypistComponent implements OnInit {
  @Output() dataEvent = new EventEmitter<any>();
  ListQuotes:any;
 constructor(private httpClient: HttpClient) {
  this.ListQuotes= [];
  }
 ngOnInit(): void {
  this.getListQuotes();
 }
  getListQuotes() 
{
  this.httpClient.get("https://quotes-api-production.up.railway.app/quotes/api?character=Believe&sort=ASC&page=0&size=5").subscribe((response) => {
    this.ListQuotes = response
    this.dataEvent.emit(response);
  })
  
}

}
