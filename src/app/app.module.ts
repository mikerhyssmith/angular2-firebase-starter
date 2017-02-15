import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleRatingComponentComponent } from './vehicle-rating-component/vehicle-rating-component.component';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

// Must export the config
export const firebaseConfig = {

};


@NgModule({
  declarations: [
    AppComponent,
    VehicleRatingComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
