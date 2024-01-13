import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Service } from '../../service/service';
import { MatDialog } from '@angular/material/dialog';
import { MissionRequestDto } from '../../model/dto/MissionRequestDto';
import { ConfirmPopupComponent } from '../../components/confirm-popup/confirm-popup.component';
import { MissionRequestState } from '../../model/enum/MissionRequestState';
import { EditMissionComponent } from '../../components/edit-mission/edit-mission.component';
import { CreateMissionComponent } from '../../components/create-mission/create-mission.component';

@Component({
  selector: 'app-mission-request',
  templateUrl: './mission-request.component.html',
  styleUrls: ['./mission-request.component.css']
})
export class MissionRequestComponent implements AfterViewInit {

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

  displayedColumns: string[] = ['id', 'professorFullName', 'missionTitle', 'missionDescription', 'destination', 'missionStartDate', 'missionEndDate', 'state', 'action', 'requestDate'];

  cancelMissionRequest(missionRequestID: number) {
    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      width: '400px',
      data: {
        missionRequestID
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirmed) {

        this.service.CancelMissionRequest(missionRequestID).subscribe(
          () => {
            console.log('Mission request canceled successfully.');

        this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID)?.setState(MissionRequestState.CANCELLED);
        this.dataSource.data=this.requestslist;
          },
          (error) => {
            console.error('Error canceling mission request:', error);
          }
        );

      }
    });
  }

  createNewRequest() {
    const dialogRef = this.dialog.open(CreateMissionComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirmed) {
        if (result.missionRequest) {

          result.missionRequest.professorId = 52;

          this.service.CreateMissionRequest(result.missionRequest).subscribe(
            () => {

          // create it using service >> return missionrequest >> add to request list
          this.requestslist.push(new MissionRequestDto(
            result.missionRequest.id,
            52,
            '',
            new Date(),
            MissionRequestState.CREATED,
            result.missionRequest.title,
            result.missionRequest.description,
            new Date(result.missionRequest.startDate),
            new Date(result.missionRequest.endDate),
            result.missionRequest.destination
          ));
          this.dataSource.data=this.requestslist;
            },
            (error) => {
              console.error('Error canceling mission request:', error);
            }
          );

        }

      }
    });
  }

  editMissionRequest(missionRequestID: number) {
    const missionRequest = this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID);
    const dialogRef = this.dialog.open(EditMissionComponent, {
      width: '600px',
      data: {
        missionRequest: missionRequest
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirmed) {

        if (result.missionRequest) {
          this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID)?.setState(MissionRequestState.CREATED);
          this.requestslist.find((r: MissionRequestDto) => r.getId() === missionRequestID)?.setRequestDate(new Date());
          this.dataSource.data=this.requestslist;
        }

      }
    });
  }
}
