import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/interfaces/projet';
import { DonneesService } from 'src/app/services/donnees.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  articles:Projet[]=[];
  lastUpdate = new Date();
  currentDate = new Observable<string>(observer => {

    setInterval(() => observer.next(new Date().toString()), 1000);

  });
  constructor(private objetService: DonneesService) { }

  ngOnInit(): void {
    this.articles = this.objetService.getAll();
  }

}
