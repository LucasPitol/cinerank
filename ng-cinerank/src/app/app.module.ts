import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatRippleModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardComponent } from './pages/card/card.component';
import { MovieService } from './services/movie-service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    CardComponent,
    MovieDetailsComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ScrollingModule,
  ],
  providers: [
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
