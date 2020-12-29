import { Component, OnInit } from '@angular/core';
import {ClassPoint} from '../Models/classPoint';
import {EmployerServiceService} from '../services/employer-service.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModelPointage} from '../Models/ModelPointage';

@Component({
  selector: 'app-pointage',
  templateUrl: './pointage.component.html',
  styleUrls: ['./pointage.component.scss']
})
export class PointageComponent implements OnInit {

   poinTage:ClassPoint=new ModelPointage();
  p:any;


  constructor(private employeService: EmployerServiceService, private flashMessages: FlashMessagesService) {

  }

  ngOnInit(): void {

  }

  ajouterTache(point:ModelPointage){

    this.poinTage.id=point.id;
    this.poinTage.heuredb=point.heuredb;
    this.poinTage.heuref=point.heuref;
    this.poinTage.datej=point.datej;
    this.employeService.AjoutPointage(this.poinTage).subscribe(
      resp => {
        this.p=resp;
        if(this.p!=undefined) {
          this.flashMessages.show('tache associe ', {cssClass: 'alert-success', timeout: 3000});
        }
        else{

          this.flashMessages.show('verifier matricule', {cssClass: 'alert-danger', timeout: 3000});

        }
      }, error => {
        this.flashMessages.show('employee ne existe pas ', {cssClass: 'alert-danger', timeout: 3000});

      }
    )
    this.poinTage=new ClassPoint();


  }

}
