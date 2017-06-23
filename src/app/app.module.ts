import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBOU73Vl18uWlGiLBOACoCNOiujz4mU-Rc",
    authDomain: "ng-notas-4f03a.firebaseapp.com",
    databaseURL: "https://ng-notas-4f03a.firebaseio.com",
    storageBucket: "ng-notas-4f03a.appspot.com",
    messagingSenderId: '998663152884'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
