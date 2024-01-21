import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { SelectedcourseComponent } from './selectedcourse/selectedcourse.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './services/authguard.service';
import { canActivate, canActivateChild } from './auth.guard';


const routes: Routes = [
  { path: 'product', redirectTo: 'About', pathMatch: 'prefix' },  //pathmach :prefix
  { path: 'doco', redirectTo: 'Home', pathMatch: 'full' },  //pathmach :prefix
  { path: '', redirectTo: 'Home', pathMatch: 'full' },  //pathmach :prefix
  {path:'Home' ,component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Courses',component:CoursesComponent},
  {path:'Courses',canActivateChild:[canActivateChild],children:[
    {path:'Checkout',component:CheckoutComponent,canActivate: [canActivate],
  }
  ]},
  {path:'Courses/:id',component:SelectedcourseComponent},
  {path:'login',component:LoginComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
