import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployerServiceService} from '../services/employer-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.scss']
})
export class EditEmployerComponent implements OnInit {
   emploee:any;
  emploee1:any;



  constructor(private  active:ActivatedRoute,private  emp:EmployerServiceService ,private flashService:FlashMessagesService, private router:Router) { }

  ngOnInit(): void {
    let id=atob(this.active.snapshot.params.id);
    this.emp.ChercherById(id).subscribe(
      resp=>{
        this.emploee=resp;

      }, error => {
        this.flashService.show('erreur',{cssClass: 'alert-danger', timeout: 3000});
      }

    )


  }

  EditerEmployee(empp:any){

    this.emp.EditerEmp(empp).subscribe(
      resp =>{
        this.emploee1=resp;
        this.flashService.show('employr a ete editer',{cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/listEmployer']);

      }, error => {
        this.flashService.show('erreur',{cssClass: 'alert-danger', timeout: 3000});
      }
    )

  }
}
