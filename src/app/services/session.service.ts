import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'http://localhost:8080/sessions'; // Update with your backend API URL and port

  constructor(private http: HttpClient) { }

  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}`, session);
  }

  getSession(sessionId: string): Observable<Session> {
    return this.http.get<Session>(`${this.baseUrl}/${sessionId}`);
  }

  updateSession(session: Session): Observable<Session> {
    return this.http.put<Session>(`${this.baseUrl}/${session.sessionId}`, session);
  }

  deleteSession(sessionId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${sessionId}`);
  }

  getAllSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.baseUrl}`)
  }
}
