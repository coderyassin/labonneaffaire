import {Component, OnInit} from '@angular/core';
import {ArticleComponent} from "../article/article.component";
import {NgForOf} from "@angular/common";
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-list',
  standalone: true,
    imports: [
        ArticleComponent,
        NgForOf
    ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  message: string = "";
  list: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.list = this.dataService.listeArticles;
  }

  onAffiche(arg: string) {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
}
