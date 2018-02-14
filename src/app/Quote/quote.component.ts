import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuoteService } from '../quote.service';
import { Quote } from '../Quote';


@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  
  public quotes: Quote[];
  public random: number;
  
  public displayQuote: Quote;

  handleClick(){
   
     console.log("yes");
     //window.location.reload(true);
    //this.router.navigateByUrl('/quote');
  }
  

  constructor(private quoteService: QuoteService) {
    
  }
  getQuotes(): void {
    this.quoteService.getQuotes()
    .subscribe(quotes => this.quotes = quotes);
    this.random = Math.floor(Math.random() * 22 + 1);
    this.displayQuote = this.quotes[this.random];

  }
  ngOnInit() {
    this.getQuotes();
    
  }
}