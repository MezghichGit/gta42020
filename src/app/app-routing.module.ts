import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployerComponent } from './list-employer/list-employer.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
const routes: Routes = [
 
  { path: "", pathMatch: "full", redirectTo: "list-employer" },
  { path: "list-employer", component: ListEmployerComponent },
  { path: "ajouter-employer", component: AddEmployerComponent },
  { path: "modifier-employer/:id", component: UpdateEmployerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
