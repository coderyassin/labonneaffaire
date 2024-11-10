import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  id!: number;
  titre!: string | undefined;
  prix!: number | undefined;
  description!: string | undefined;
  urlImg!: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.titre = this.dataService.getArticle(id)?.titreArticle;
    this.prix = this.dataService.getArticle(id)?.prixArticle;
    this.description = this.dataService.getArticle(id)?.description;
    this.urlImg = this.dataService.getArticle(id)?.urlImg;
  }


}
