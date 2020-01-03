import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Letter} from '../letter.model';
import alphabet from '../../assets/alphabet.json';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.styl']
})
export class ChallengeComponent implements OnInit {
  letter: Letter;
  letters: Letter[] = alphabet;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.letters = alphabet;
    this._route.paramMap.subscribe((params: ParamMap) => {
      let currentLetter = params.get('letter');
      if (!currentLetter) {
        if (localStorage.latestLetter) {
          currentLetter = localStorage.latestLetter;
        } else {
          currentLetter = localStorage.latestLetter = 'а';
        }
      } else {
        localStorage.latestLetter = currentLetter.toLowerCase();
      }

      for (const letter of this.letters) {
        if (currentLetter === letter.name) {
          this.letter = letter;
        }
      }

      if (this.letter === undefined) {
        currentLetter = localStorage.latestLetter = 'a';
        this.letter = this.letters[0];
      }
    });
  }

}
