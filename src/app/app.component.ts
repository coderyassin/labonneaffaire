import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ArticleComponent} from './components/article/article.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ArticleComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  prices: number[] = [150, 240, 650, 320];
  titles: string[] = ['Vélo', 'TV', 'Jouet', 'Objet'];
  message: string = "";

  liste = [
    {
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: "/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Neuf, jamais utilisé",
      urlImg: "/images/jouet.jpeg",
      textAltImg: "Un jouet pour enfant",
      dispo: true
    },
    {
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: "/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    }
  ]

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
}
