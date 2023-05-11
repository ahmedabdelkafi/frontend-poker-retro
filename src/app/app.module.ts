import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SessionComponent } from './Components/session/Xsession/session.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AppRoutingModule } from './app-routing.module';
import { SessionCreateComponent } from './Components/session/session-create/session-create.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    NavbarComponent,
    SessionCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
