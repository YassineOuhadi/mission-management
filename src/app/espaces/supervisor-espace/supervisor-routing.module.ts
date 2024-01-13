// supervisor-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervisorHomeComponent } from './pages/home/home.component';
import { MissionTreatmentComponent } from './pages/mission/mission.component';

const supervisorRoutes: Routes = [
  { path: '', component: SupervisorHomeComponent },
  { path: 'mission', component: MissionTreatmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(supervisorRoutes)],
  exports: [RouterModule],
})
export class SupervisorRoutingModule {}
