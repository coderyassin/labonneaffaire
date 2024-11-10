import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage,
    NgIf,
    NgStyle,
    NgClass,
    RouterLink
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
  jaime: boolean = true;

  onLike() {
    if (this.jaime) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo) {
      return "green"
    } else {
      return "red"
    }
  }
}
