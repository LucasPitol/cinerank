import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";


const appRoutes: Routes = [
    { path: 'home', component: MainComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
]

export const routing = RouterModule.forRoot(appRoutes);
