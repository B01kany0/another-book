import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { SuitesComponent } from './suites/suites.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

export const router: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'suites', component: SuitesComponent},
    { path: 'booking', component: BookingComponent}, 
    { path: 'gallery', component: GalleryComponent},
    { path: 'home', component: HomeComponent},

   { path: 'confirmation', component: ConfirmationComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);