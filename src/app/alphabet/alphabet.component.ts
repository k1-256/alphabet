import {Component, Input, OnInit} from '@angular/core';
import {AlphabetService} from '../alphabet.service';
import {Letter} from '../letter.model';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.styl']
})
export class AlphabetComponent implements OnInit {
  @Input()
  currentLetter: Letter;

  @Input()
  letters: Letter[];

  constructor() { }

  ngOnInit() {
  }

}
