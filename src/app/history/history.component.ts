import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [
    NgForOf
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent  implements  OnInit{

  history: any[] = [];
  ngOnInit(): void {

    this.history = JSON.parse(localStorage.getItem('quiz-history') || '[]');
  }

}
