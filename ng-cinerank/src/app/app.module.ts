import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule } from '@angular/material';

import { routing } from './app.router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './pages/card/card.component';
import { MovieService } from './services/movie-service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    MovieService,
    // SidenavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
