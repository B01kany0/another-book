import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { SuitesComponent } from './suites/suites.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    BookingComponent,
    SuitesComponent,
    HomeComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
