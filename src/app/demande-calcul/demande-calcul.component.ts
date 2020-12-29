import { Component, OnInit } from '@angular/core';
import {HeureSipl} from '../Models/HeureSipl';
import {EmployerServiceService} from '../services/employer-service.service';

@Component({
  selector: 'app-demande-calcul',
  templateUrl: './demande-calcul.component.html',
  styleUrls: ['./demande-calcul.component.scss']
})
export class DemandeCalculComponent implements OnInit {

  heureS:HeureSipl = new HeureSipl();
  Li:any;

  constructor(private employeeService: EmployerServiceService) { }

  ngOnInit(): void {
  }

  ajouterTache(hR:HeureSipl){
    this.heureS=hR;
    console.log(
      this.heureS
    )
    this.employeeService.EnvoiDemande(this.heureS).subscribe(
      resp =>{
        this.Li=resp;
        // console.log(this.Li);
      }, error => {
        console.log('erreur');
      }
    )



  }
}
