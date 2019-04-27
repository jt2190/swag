import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SwagFormComponent } from './swag-form/swag-form.component';
import { SwagComponent } from './swag/swag.component';
import { MessagesComponent } from './messages/messages.component';
import { SwagDetailComponent } from './swag-detail/swag-detail.component';
import { StateChangesComponent } from './state-changes/state-changes.component';
import { SnapshotChangesComponent } from './snapshot-changes/snapshot-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    SwagComponent,
    SwagDetailComponent,    
    SwagFormComponent,
    MessagesComponent,
    StateChangesComponent,
    SnapshotChangesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
