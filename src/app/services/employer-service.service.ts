import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClassPoint} from '../Models/classPoint';
import {HeureSipl} from '../Models/HeureSipl';
import {ModelPointage} from '../Models/ModelPointage';

@Injectable({
  providedIn: 'root'
})
export class EmployerServiceService {


  host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }
  AjouterEmployer(employer:any){
    return this.http.post(this.host+"/ajouterEmployer",employer);

  }
  listEmployees(index:number){
    return this.http.get(this.host+"/v1/listEmployees/"+index);
  }
  AjoutPointage(modelpointage:ModelPointage){
    return this.http.post(this.host+"/v1/pointageJours", modelpointage);
  }
  EnvoiDemande(model:HeureSipl){
    console.log(model)
    return this.http.post(this.host+"/classifieH",model);
  }
  ChercherById(id:any){
    return this.http.get(this.host+"/chercherById/"+id);
  }
  EditerEmp(emp:any){
    return this.http.post(this.host+"/update",emp);
  }
  DeleteEmployee(id:string){
    console.log(id);
    return this.http.get(this.host+"/deleted/"+id);
  }
}
