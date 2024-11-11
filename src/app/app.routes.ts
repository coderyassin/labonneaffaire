import { Routes } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {DetailsComponent} from './components/details/details.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AjouterComponent} from './components/ajouter/ajouter.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', redirectTo: '', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: "ajouter", component: AjouterComponent },
  { path: "**", component: PageNotFoundComponent }
];
