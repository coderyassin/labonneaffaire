import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  @Output() info = new EventEmitter<string>();

  @Input() titreArticle!: string;
  @Input() prixArticle!: number;
  @Input() description!: string;
  @Input() urlImg!: string;
  @Input() textAltImg!: string;
  @Input() dispo!: boolean;

  onLike() {
    this.totalNbrLike++;
    this.info.emit(this.titreArticle);
  }
}
