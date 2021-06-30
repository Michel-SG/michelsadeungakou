import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonneesService } from 'src/app/services/donnees.service';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  id:any;
  article: any;
  constructor(private route: ActivatedRoute, private donnee: DonneesService) { }

  ngOnInit(): void {
     this.initialize();
  }

  initialize() {
  this.route.paramMap.subscribe(
    (value) => {
      this.id = value.get('id');
      console.log(typeof +this.id)
      this.article = this.donnee.getOneById(+this.id);
      });
    
  }

}
