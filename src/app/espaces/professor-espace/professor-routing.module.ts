// professor-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorHomeComponent } from './pages/home/home.component';
import { MissionRequestComponent } from './pages/mission-request/mission-request.component';
import { ReimbursementRequestComponent } from './pages/reimbursement-request/reimbursement-request.component';

const professorRoutes: Routes = [
  { path: '', component: ProfessorHomeComponent },
  { path: 'mission', component: MissionRequestComponent },
  { path: 'reimbursement', component: ReimbursementRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(professorRoutes)],
  exports: [RouterModule],
})
export class ProfessorRoutingModule {}
