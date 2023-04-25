import { Component, OnInit } from '@angular/core';
import { Session } from '../../models/Session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  // Array of sessions
  sessionsArray: Session[] = [];
  sessions: Session[] = []; // List of sessions
  // New session object for creating a new session
  newSession = {sessionId: '',users: []}

  isCreatingSession: boolean = false; // Flag to track if session creation is in progress

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe((data: Session[]) => {
      console.log(JSON.stringify(data));
      // i dont get why we need to do this.sessions = Object.values(data);
      this.sessions = Object.values(data);
    });


    console.log(this.sessions + "sessions");
    // set condition if sessions is empty then display no sessions
    if (this.sessions.length == 0) {
      console.log("nombre of sessions i");
    } else {
      // Call getAllSessions() method on initialization of component

console.log ("nombre of sessions :"+this.sessions.length);
    }
  }
  createSession() {
    this.isCreatingSession = true; // Set flag to indicate session creation in progress

    this.sessionService.createSession(this.newSession)
      .subscribe(response => {
        // Handle successful response from backend
        console.log('Session created successfully:', response);
        // Update UI or perform other actions
        this.isCreatingSession = false; // Reset the flag
        // Reset the new session object
        this.newSession = {sessionId: '',users: []};
       // this.getAllSessions(); // Update the list of sessions
      }, error => {
        // Handle error response from backend
        console.error('Error creating session:', error);
        // Update UI or perform error handling actions
        this.isCreatingSession = false; // Reset the flag
      });
  }

  /*getAllSessions() {
    this.sessionService.getAllSessions()
      .subscribe(response => {
        // Handle successful response from backend
        console.log('Sessions retrieved successfully:', response);
        // Update UI or perform other actions
        this.sessions = response;
        // Assign response to sessions property to bind to view in HTML

      }, error => {
        // Handle error response from backend
        console.error('Error retrieving sessions:', error);
        // Update UI or perform error handling actions
      });
  }
*/  // Similar implementation for other CRUD operations (e.g., getSession, updateSession, deleteSession )
}
