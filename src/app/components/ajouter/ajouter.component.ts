import { Component } from '@angular/core';
import {FormControl, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css'
})
export class AjouterComponent {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }
}
