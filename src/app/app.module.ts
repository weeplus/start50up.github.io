import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AngularFireModule } from 'angularfire2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyAoyGom-dv-Lw1F9magl-pKuxhSUQkb2tI',
  authDomain: 'project-planwork.firebaseapp.com',
  databaseURL: 'https://project-planwork.firebaseio.com',
  projectId: 'project-planwork',
  storageBucket: 'project-planwork.appspot.com',
  messagingSenderId: '589641577359'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
