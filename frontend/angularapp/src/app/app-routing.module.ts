import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { CreateUpdateComponentComponent } from './components/create-update-component/create-update-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';


const routes: Routes = [
  {
    path: '' , component: ListComponentComponent
  },
  {
    path: 'create' , component: CreateUpdateComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
