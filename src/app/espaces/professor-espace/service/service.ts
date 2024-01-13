import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  missionRequestsApiurl = `${environment.apiUrl}`;

  GetAllMissionsRequests(): Observable<MissionRequestDto[]> {
    return this.http.get<MissionRequestDto[]>(`${this.missionRequestsApiurl}/flattened-mission-requests`);
  }

  GetProfessorMissionsRequests(professorId: number): Observable<MissionRequestDto[]> {
    return this.http.get<MissionRequestDto[]>(`${this.missionRequestsApiurl}/flattened-mission-requests` + professorId);
  }

  CreateMissionRequest(missionRequest: MissionRequestDto): Observable<any> {
    const url = `${this.missionRequestsApiurl}/flattened-mission-requests`;
    return this.http.post(url, missionRequest);
  }

  CancelMissionRequest(missionRequestID: number): Observable<void> {
    const url = `${this.missionRequestsApiurl}/mission-requests/${missionRequestID}/cancel`;
    return this.http.patch<void>(url, {});
  }

}

