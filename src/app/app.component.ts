import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ArticleComponent} from './components/article/article.component';
import {NgForOf} from '@angular/common';
import {filter, interval, map, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ArticleComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent /*implements OnInit*/ {
  secondes! : any;
  compteurSubscription!: Subscription;

  constructor() { }

  /*ngOnInit() {
    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value % 2 === 0 ?
        `${value} est pair` :
        `${value} est impair`
      )
    );

    this.compteurSubscription = compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  ngOnDestroy() {
    this.compteurSubscription.unsubscribe();
  }*/

}
