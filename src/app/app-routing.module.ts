import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ParcoursComponent } from './components/parcours/parcours.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'accueil',  component: AccueilComponent},
  {path: 'parcours',  component: ParcoursComponent},
  {path: 'projets/:id',  component: ProjetsComponent},
  {path: 'contact',  component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'accueil'},
  {path: '**',redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
