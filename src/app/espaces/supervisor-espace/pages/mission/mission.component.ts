import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Service } from '../../service/service';
import { MatDialog } from '@angular/material/dialog';
import { MissionRequestDto } from '../../model/dto/MissionRequestDto';
import { MissionRequestState } from '../../model/enum/MissionRequestState';
import { SupervisorConfirmPopupComponent } from '../../components/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionTreatmentComponent implements AfterViewInit {

  constructor(private builder: FormBuilder, private service: Service, private dialog: MatDialog) {
    this.LoadRequests();
  }
  requestslist: MissionRequestDto[] = [];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void { }

  LoadRequests() {
    this.service.GetAllMissionsRequests().subscribe(res => {
      this.requestslist = res.map(item => new MissionRequestDto(
        item.id,
        0,
        item.professorFullName,
        item.requestDate,
        item.state,
        item.missionTitle,
        item.missionDescription,
        new Date(item.missionStartDate),
        new Date(item.missionEndDate),
        item.destination,
        item.missionOrder
      ));
      this.dataSource = new MatTableDataSource(this.requestslist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['id', 'professorFullName', 'missionTitle', 'missionDescription', 'destination', 'missionStartDate', 'missionEndDate', 'state', 'requestDate'];


  approveMissionRequest(missionRequestID: number) {
    const dialogRef = this.dialog.open(SupervisorConfirmPopupComponent, {
      width: '400px',
      data: {
        missionRequestID
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirmed) {

        this.service.ApproveMissionRequest(missionRequestID).subscribe(
          () => {
            console.log('Mission request canceled successfully.');
            this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID)?.setState(MissionRequestState.APPROVED);
            this.dataSource.data=this.requestslist;
          },
          (error) => {
            console.error('Error canceling mission request:', error);
          }
        );


      }
    });
  }

  rejectMissionRequest(missionRequestID: number) {
    const dialogRef = this.dialog.open(SupervisorConfirmPopupComponent, {
      width: '400px',
      data: {
        missionRequestID
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirmed) {

        this.service.RejectMissionRequest(missionRequestID).subscribe(
          () => {
            console.log('Mission request canceled successfully.');
            this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID)?.setState(MissionRequestState.REJECTED);
            this.dataSource.data=this.requestslist;
          },
          (error) => {
            console.error('Error canceling mission request:', error);
          }
        );



      }
    });
  }
}
