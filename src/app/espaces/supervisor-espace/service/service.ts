import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MissionRequestDto } from '../model/dto/MissionRequestDto';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  missionRequestApiurl = `${environment.apiUrl}`;

  GetAllMissionsRequests(): Observable<MissionRequestDto[]> {
    return this.http.get<MissionRequestDto[]>(`${this.missionRequestApiurl}/flattened-mission-requests`);
  }

  ApproveMissionRequest(missionRequestID: number): Observable<void> {
    const url = `${this.missionRequestApiurl}/mission-requests/${missionRequestID}/approve`;
    return this.http.patch<void>(url, {});
  }

  RejectMissionRequest(missionRequestID: number): Observable<void> {
    const url = `${this.missionRequestApiurl}/mission-requests/${missionRequestID}/reject`;
    return this.http.patch<void>(url, {});
  }

}
