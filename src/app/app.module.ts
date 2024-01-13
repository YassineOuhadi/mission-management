import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from 'src/material.module';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// professor components
import { MissionRequestComponent } from './espaces/professor-espace/pages/mission-request/mission-request.component';
import { ProfessorHomeComponent } from './espaces/professor-espace/pages/home/home.component';
// supervisor components
import { MissionTreatmentComponent } from './espaces/supervisor-espace/pages/mission/mission.component';
import { SupervisorHomeComponent } from './espaces/supervisor-espace/pages/home/home.component';
// registrar components
// import { MissionRequestComponent } from './professor-epace/pages/mission-request/mission-request.component';
import { RegistrarHomeComponent } from './espaces/registrar-espace/pages/home/home.component';
import { TopNavComponent } from './espaces/professor-espace/components/top-nav/top-nav.component';
import { ProfessorEspaceComponent } from './espaces/professor-espace/professor-espace.component';
import { ReimbursementRequestComponent } from './espaces/professor-espace/pages/reimbursement-request/reimbursement-request.component';
import { ConfirmPopupComponent } from './espaces/professor-espace/components/confirm-popup/confirm-popup.component';
import { EditMissionComponent } from './espaces/professor-espace/components/edit-mission/edit-mission.component';
import { CreateMissionComponent } from './espaces/professor-espace/components/create-mission/create-mission.component';
import { SupervisorEspaceComponent } from './espaces/supervisor-espace/supervisor-espace.component';
import { SupervisorEspaceTopNavComponent } from './espaces/supervisor-espace/components/top-nav/top-nav.component';
import { SupervisorConfirmPopupComponent } from './espaces/supervisor-espace/components/confirm-popup/confirm-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MissionRequestComponent,
    ProfessorHomeComponent,
    SupervisorHomeComponent,
    MissionTreatmentComponent,
    RegistrarHomeComponent,
    TopNavComponent,
    SupervisorEspaceTopNavComponent,
    ProfessorEspaceComponent,
    ReimbursementRequestComponent,
    ConfirmPopupComponent,
    SupervisorConfirmPopupComponent,
    EditMissionComponent,
    CreateMissionComponent,
    SupervisorEspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
