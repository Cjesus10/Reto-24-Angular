import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { Panel1Component } from './panel1/panel1.component';
import { Panel2Component } from './panel2/panel2.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { DialogComponent } from './principal/dialog/dialog.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'panel1', component: Panel1Component, canActivate: [CanactivateGuard]},
  {path: 'panel2', component: Panel2Component, canActivate: [CanactivateGuard]},
  {path: 'dialog', component: DialogComponent, canActivate: [CanactivateGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
