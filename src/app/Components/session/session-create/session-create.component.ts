import { Component, OnInit } from '@angular/core';
import { Session } from '../../../models/Session';
import { SessionService } from '../../../services/session.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent {

  constructor(private sessionService: SessionService,  private router: Router) { }
  newSession: any = {
    sessionId: "",
    sessionDate: ""
  }
  showSuccessMessage: boolean = false;
  createSession(newSession: Session){

    this.sessionService.createSession(newSession).subscribe(newSession => {
        console.log('Session created successfully:', newSession);
        this.showSuccessMessage = true;
        this.router.navigate(['poker', newSession.sessionId]);
      },
      (error) => {
        console.error('Failed to create session:', error);
        // handle error here
      }


    );
  }
}
