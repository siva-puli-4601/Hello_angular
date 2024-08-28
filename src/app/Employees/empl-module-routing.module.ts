import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentEmployee } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { CalenderComponent } from './calender/calender.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'leave', component: LeaveComponent },
  {path:"calender", component: CalenderComponent},
  { path: '**', redirectTo: '' } // Redirect unknown routes to home or a not-found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplModuleRoutingModule { }
