import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";


const appRoutes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'details/:movieId', component: MovieDetailsComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
]

export const routing = RouterModule.forRoot(appRoutes);
