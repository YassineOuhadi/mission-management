import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserType } from './model/enum/UserType';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authApiurl = `${environment.apiUrl}/user`;

  private tokenCookieName = 'token';
  private userTypeCookieName = 'user-type';

  register(username: string, email: string, phone: string, password: string, userType: UserType): Observable<any> {
    const body = { username: username, email: email, phone: phone, password: password, userType: userType };
    return this.http.post(`${this.authApiurl}/register`, body);
  }

  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    return this.http.post(`${this.authApiurl}/login`, body);
  }

  validateToken(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.authApiurl}/validate-jwt`, { headers });
  }

  // async isSessionActive(): Promise<boolean> {
  //   const token = this.getTokenFromCookie();

  //   if (this.isloggedin()) {
  //     try {
  //       const response: any = await this.validateToken().toPromise();

  //       if (response.isValid) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } catch (error) {
  //       return false;
  //     }
  //   }

  //   return false;
  // }

  setTokenInCookie(token: string): void {
    this.cookieService.set(this.tokenCookieName, token);
  }

  setUserTypeInCookie(userType: string): void {
    this.cookieService.set(this.userTypeCookieName, userType);
  }

  getTokenFromCookie(): string | undefined {
    return this.cookieService.get(this.tokenCookieName);
  }

  getUserTypeFromCookie(): string | undefined {
    return this.cookieService.get(this.userTypeCookieName);
  }

  removeTokenFromCookie(): void {
    this.cookieService.delete(this.tokenCookieName);
  }

  removeUserTypeFromCookie(): void {
    this.cookieService.delete(this.userTypeCookieName);
  }

  logout(): void {
    this.removeTokenFromCookie();
    this.removeUserTypeFromCookie();
  }

  getHeaders(): HttpHeaders {
    const token = this.getTokenFromCookie();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  isloggedin(): boolean {
    const token = this.getTokenFromCookie();
    return token !== undefined && token !== null && token !== '';
  }
}
