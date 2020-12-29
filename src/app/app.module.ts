import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { SingleApparielComponent } from './single-appariel/single-appariel.component';
import {EmployerServiceService} from './services/employer-service.service';
import { EmployerComponent } from './employer/employer.component';

import {FormsModule} from '@angular/forms';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { PointageComponent } from './pointage/pointage.component';
import { LoginComponent } from './login/login.component';
import { DemandeCalculComponent } from './demande-calcul/demande-calcul.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'listEmployer', component: ListEmpComponent },
  { path: 'AjouterEmployer', component: EmployerComponent},
  { path: 'pointagee', component: PointageComponent},
  { path: 'demandeCalcule', component:DemandeCalculComponent},
  {path:"editerEmployer/:id",component:EditEmployerComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppareilViewComponent,
    SingleApparielComponent,
    EmployerComponent,
    ListEmpComponent,
    PointageComponent,
    LoginComponent,
    DemandeCalculComponent,
    EditEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,

  ],
  providers: [EmployerServiceService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
