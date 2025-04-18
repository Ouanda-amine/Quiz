import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MyserviceService} from '../myservice.service';

@Component({
  standalone: true,
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule ],
  templateUrl:'./quiz.component.html',
  styleUrl:'quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentQuestion = 0;
  score = 0;
  selected: string = '';
  correctAnswer: string = '';
  isAnswered = false;
  username = '';

  constructor(private myservice: MyserviceService, private router: Router) {}

  ngOnInit() {
    const settings = JSON.parse(localStorage.getItem('quieparamettre') || '{}');
    this.myservice.getquest(settings.categorie, settings.dif).subscribe((res: any) => {
      this.questions = res.results.map((q: any) => {
        return {
          question: decodeURIComponent(q.question),
          correct: decodeURIComponent(q.correct_answer),
          answers: [...q.incorrect_answers.map((a: string) => decodeURIComponent(a)), decodeURIComponent(q.correct_answer)]
            .sort(() => 0.5 - Math.random())
        };
      });
    });
  }

  selectAnswer(ans: string) {
    if (this.isAnswered) return;
    this.selected = ans;
    this.correctAnswer = this.questions[this.currentQuestion].correct;
    if (ans === this.correctAnswer) this.score++;
    this.isAnswered = true;
    setTimeout(() => {
      this.currentQuestion++;
      this.isAnswered = false;
    }, 1000);
  }

  saveResult() {
    const history = JSON.parse(localStorage.getItem('quiz-history') || '[]');
    const settings = JSON.parse(localStorage.getItem('quieparamettre') || '{}');
    history.push({
      user: this.username,
      score: this.score,
      totalQuestions: this.questions.length,
      category: settings.categorie || 'N/A',
      difficulty: settings.dif || 'N/A',
      date: new Date()
    });
    localStorage.setItem('quiz-history', JSON.stringify(history));
    this.router.navigate(['/result']);
  }
}
