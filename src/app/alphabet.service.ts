import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Letter} from './letter.model';

@Injectable({
  providedIn: 'root'
})
export class AlphabetService {
  constructor(
    private _http: HttpClient
  ) { }

  public getLetters(): Observable<Letter[]> {
    return this._http.get<Letter[]>('./assets/alphabet.json');
  }
}
