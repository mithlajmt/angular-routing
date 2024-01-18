import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { NotfoundComponent } from './notfound/notfound.component';



const routes:Routes=[
  { path: 'product', redirectTo: 'About', pathMatch: 'prefix' },  //pathmach :prefix
  { path: '', redirectTo: 'Home', pathMatch: 'full' },  //pathmach :prefix
  {path:'Home' ,component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'**', component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
