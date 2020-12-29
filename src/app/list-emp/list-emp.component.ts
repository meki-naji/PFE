import { Component, OnInit } from '@angular/core';
import {EmployerServiceService} from '../services/employer-service.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit {
  mss:any;
  listesEmp:any;
  pages:any=[];
  page=0;


  constructor(private employeeService: EmployerServiceService,private  router:Router,
              private flashService:FlashMessagesService) { }


  setPage(i:any,event:any){
    event.preventDefault();
    this.page=i;
    this.afficheliste();

  }

  ngOnInit(): void {
    this.afficheliste();
  }

  afficheliste(){
    this.employeeService.listEmployees(this.page).subscribe(
      (resp:any) => {
        console.log(resp)
       this.listesEmp=resp['content'];
        this.pages = new Array(resp['totalPages']);

      },error => {
        console.log('erreur');
      }


   )
  }
  EditEmp(id:string){
    this.router.navigateByUrl("/editerEmployer/"+btoa(id));

  }
  DeleteEmp(id:any){
    this.employeeService.DeleteEmployee(id).subscribe(
      resp =>{
        this.mss = resp;
        this.flashService.show('employr a ete Supprimer',{cssClass: 'alert-success', timeout: 3000});
        this.employeeService.listEmployees(this.page).subscribe(
          resp => {
            this.listesEmp=resp;

          },error => {
            console.log('erreur');
          })
        this.router.navigate(['/listEmployer']);
      }, error => {
        this.flashService.show('erreur',{cssClass: 'alert-danger', timeout: 3000});
      }
    )

  }
}
