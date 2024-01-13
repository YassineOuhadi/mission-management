// registrar-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarHomeComponent } from './pages/home/home.component';

const registrarRoutes: Routes = [
  { path: '', component: RegistrarHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(registrarRoutes)],
  exports: [RouterModule],
})
export class RegistrarRoutingModule {}
