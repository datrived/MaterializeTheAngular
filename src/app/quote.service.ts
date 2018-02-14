import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Quote } from './Quote';
import { QUOTES } from './Quote_List';

@Injectable()
export class QuoteService {
  getQuotes(): Observable<Quote[]> {
    return of(QUOTES);
  }
  constructor() { }

}
