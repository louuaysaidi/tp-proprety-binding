import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe, JsonPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';

@Component({
  selector: 'app-pipe-exemple',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    JsonPipe
  ],
  templateUrl: './pipe-exemple.html',
  styleUrl: './pipe-exemple.css',
})
export class PipeExemple {
  name = 'louay saidi';
  price = 1234.5;
  today = new Date();
  percentage = 0.75;
  message = 'angular est puissant';
  users = ['Ali', 'Sarra', 'Mohamed'];
}
