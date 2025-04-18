import {Component, OnInit} from '@angular/core';
import {MyserviceService} from '../myservice.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  tableCategories : any[] = [];
  categorie : number = 9;
  dif : string='easy' ;

  constructor(private  myservice : MyserviceService ,private router : Router) {

  }

  ngOnInit(): void {
    this.myservice.getcat().subscribe(data=>
      this.tableCategories = data.trivia_categories
    )
  }
  Start(){
    localStorage.setItem('quieparamettre', JSON.stringify({categorie : this.categorie , dif : this.dif}))
    this.router.navigate(['/quiz'])
  }


}
