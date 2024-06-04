import { Component, OnInit, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-quarta-sessao',
  templateUrl: './quarta-sessao.component.html',
  styleUrls: ['./quarta-sessao.component.css']
})
export class QuartaSessaoComponent implements OnInit, OnDestroy  {
  words: string[] = ['ESPECIALISTAS', 'PROFISSIONAIS', 'DENTISTAS', 'CIRURGIÕES'];
  currentWord: string = this.words[0];
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    let index = 0;
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.words.length;
      this.currentWord = this.words[index];
    }, 1500);
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}

