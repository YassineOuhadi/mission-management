import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MissionRequestDto } from '../../model/dto/MissionRequestDto';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent {

  constructor(private http: HttpClient,private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { missionRequest: MissionRequestDto;},
    public dialogRef: MatDialogRef<EditMissionComponent>) {
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
