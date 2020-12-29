import { Component, OnInit } from '@angular/core';
import {EmployerServiceService} from '../services/employer-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import {ClassPoint} from '../Models/classPoint';
import {Employee} from '../Models/Employee';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  employee:Employee = new Employee();
  notifier="";
  employer:any;
  emp;
  n:any;
  affichage:boolean=false;

  constructor(private employerservice:EmployerServiceService ,
              private flashMessages: FlashMessagesService) {
    this.emp=employerservice;
  }

  ngOnInit(): void {
  }
  ajouterem(emp:Employee){
    console.log(emp)
    this.employee=emp;


      this.employerservice.AjouterEmployer(emp).subscribe(
        resp => {
          this.employer = resp;
          if (this.employer!=undefined) {
            console.log(this.employer)
            let text="employee a ete ajouter";

        this.flashMessages.show(text, {cssClass: 'alert-success', timeout: 3000})
             // this.notifier="ajouter Avec Success";
            // this.n=1;

          }
          else{
            this.flashMessages.show('Employee deja exist', {cssClass: 'alert-danger', timeout: 3000})

          }
        }, error => {
          this.flashMessages.show(error.message, {cssClass: 'alert-danger', timeout: 3000})
          // this.notifier="verifier matricule "
          // this.n=0;
        }
      )
    this.employee=new Employee();

    }


}
