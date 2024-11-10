import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listeArticles = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne qualité d'écran",
      urlImg: "/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      id: 3,
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Neuf, jamais utilisé",
      urlImg: "/images/jouet.jpeg",
      textAltImg: "Un jouet pour enfant",
      dispo: true
    }
  ];

  constructor() {
  }

  getArticle(id: number) {
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    });
    return articles;
  }
}
