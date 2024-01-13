import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MissionRequestDto } from '../../model/dto/MissionRequestDto';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-mission',
  templateUrl: './create-mission.component.html',
  styleUrls: ['./create-mission.component.css']
})
export class CreateMissionComponent {

  missionRequest :MissionRequestDto;

  constructor(private http: HttpClient,private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {},
    public dialogRef: MatDialogRef<CreateMissionComponent>) {
      this.missionRequest = new MissionRequestDto();
  }

  loginform = this.builder.group({
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required),
    startDate: this.builder.control('', Validators.required),
    endDate: this.builder.control('', Validators.required),
    destination: this.builder.control('', Validators.required)
  });

  closeDialog(): void {
    this.dialogRef.close();
  }

}
