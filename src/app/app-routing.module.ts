import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfessorEspaceComponent } from './espaces/professor-espace/professor-espace.component';
import { SupervisorEspaceComponent } from './espaces/supervisor-espace/supervisor-espace.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'professor',
    component: ProfessorEspaceComponent,
    loadChildren: () =>
      import('./espaces/professor-espace/professor-routing.module').then(
        (m) => m.ProfessorRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'supervisor',
    component: SupervisorEspaceComponent,
    loadChildren: () =>
      import('./espaces/supervisor-espace/supervisor-routing.module').then(
        (m) => m.SupervisorRoutingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'registrar',
    loadChildren: () =>
      import('./espaces/registrar-espace/registrar-routing.module').then(
        (m) => m.RegistrarRoutingModule
      ),
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
