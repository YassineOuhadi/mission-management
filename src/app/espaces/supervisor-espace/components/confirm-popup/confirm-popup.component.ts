import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'supervisor-espace-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.css']
})
export class SupervisorConfirmPopupComponent {

  constructor(private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: { missionRequestID: number;},
    public dialogRef: MatDialogRef<SupervisorConfirmPopupComponent>) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
