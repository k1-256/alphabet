import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ExampleWordMessage} from './example-word-message.model';
import {AlphabetService} from '../alphabet.service';
import {Letter} from '../letter.model';

@Component({
  selector: 'app-example-word',
  templateUrl: './example-word.component.html',
  styleUrls: ['./example-word.component.styl']
})
export class ExampleWordComponent implements OnChanges, OnInit {
  @Input()
  public letter: Letter;
  public exampleWord;

  message: ExampleWordMessage;

  checkedLetters = [];

  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.checkedLetters.length > 0) {
      for (let checkedLetter of this.checkedLetters)
        this._renderer.removeClass(checkedLetter, 'checked');
      this.checkedLetters = [];
    }

    this.message = new ExampleWordMessage();
    this.exampleWord = this.letter.exampleWords[Math.floor(Math.random() * this.letter.exampleWords.length)];
    this.exampleWord = this.exampleWord[0].toUpperCase() + this.exampleWord.slice(1);
  }

  check(event, char: string) {
    const hasClass = event.target.classList.contains('checked');

    if (!hasClass) {
      if (this.letter.name === char.toLowerCase()) {
        this.checkedLetters.push(event.target);
        this._renderer.addClass(event.target, 'checked');
        this.message.text = 'Правильно!';
        this.message.error = false;
        this.message.show = true;

        setTimeout(() => {
          this.message.show = false;
        }, 2000);
      } else {
        this.message.text = 'Неправильно!';
        this.message.error = true;
        this.message.show = true;

        setTimeout(() => {
          this.message.show = false;
        }, 2000);
      }
    }
  }

}
