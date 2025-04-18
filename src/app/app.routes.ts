import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {QuizComponent} from './quiz/quiz.component';
import {HistoryComponent} from './history/history.component';
import {ResultComponent} from './result/result.component';

export const routes: Routes = [
  {path  : "home" , component : HomeComponent },
  {path : "" , component : HomeComponent},
  {path : "quiz" , component : QuizComponent},
  {path : "history" , component : HistoryComponent},
  { path: 'result', component: ResultComponent }

];
