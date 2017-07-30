import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,PreloadAllModules,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedComponent } from './components/shared/shared.component';

const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'shared', component:SharedComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  { path:'', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
