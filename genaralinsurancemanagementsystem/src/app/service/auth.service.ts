import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { AuthResponse } from '../model/authResponse';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiBaseUrl + '/user';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private userRoleSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();  // <-- এটা লাগবে


  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registration(user: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));

    formData.append('photo', photo);

    return this.http.post(this.baseUrl, formData);
  }

  // login(credentials: { email: string; password: string }): Observable<AuthResponse> {
  //   let params = new HttpParams().append('email', credentials.email);

  //   return this.http.post<User[]>(this.baseUrl+'/login', { params }).pipe(
  //     map(users => {
  //       if (users.length > 0) {
  //         const user = users[0];
  //         if (user.password === credentials.password) {
  //           const token = btoa(`${user.email}:${user.password}`);
  //           this.storeToken(token);
  //           this.setCurrentUser(user);
  //           return { token, user } as AuthResponse;
  //         } else {
  //           throw new Error('Invalid password');
  //         }
  //       } else {
  //         throw new Error('User not found');
  //       }
  //     }),
  //     catchError(error => {
  //       console.error('Login error:', error);
  //       throw error;
  //     })
  //   );
  // }

  login(email: string, password: string): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(this.baseUrl + '/login', { email, password }, { headers: this.headers }).pipe(

      map(
        (response: AuthResponse) => {
          if (this.isBrowser() && response.token) {
            localStorage.setItem('authToken', response.token);
            const decodeToken = this.decodeToken(response.token);
            console.log(decodeToken.role);
            localStorage.setItem('userRole', decodeToken.role);
            this.userRoleSubject.next(decodeToken.role);
          }
          return response;

        }

      )
    );
  }

  decodeToken(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  private setCurrentUser(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  logout(): void {

    if (this.isBrowser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('authToken');
      localStorage.removeItem('userRole');
      this.userRoleSubject.next(null);
    }

  }

    isTokenExpired(token: string): boolean {
    const docodeToken = this.decodeToken(token);

    const expiry = docodeToken.exp * 1000;
    return Date.now() > expiry;
  }

   isLoggIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    this.logout();
    return false;

  }


  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }

  // log out end

  getUserRole(): any {
    return localStorage.getItem('userRole');
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  storeUserProfile(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUserProfileFromStorage(): User | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;

    }
    return null;
  }


  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  isUser(): boolean {
    const role = this.getUserRole();
    return role === 'USER';
  }

  //for spring
  getProfile(): Observable<User> {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
        console.log('Authorization header set:', headers.get('Authorization'));
      }
    }

    return this.http.get<User>(`${environment.apiBaseUrl}/user/profile`, { headers });
  }

  registerUser(user: any, photo: File) {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('photo', photo);
    return this.http.post(this.baseUrl + '/register/user', formData);
  }

  registerAdmin(user: any, photo: File, adminCode: string) {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('photo', photo);
    formData.append('adminCode', adminCode);
    return this.http.post(this.baseUrl + '/register/admin', formData);
  }






}
