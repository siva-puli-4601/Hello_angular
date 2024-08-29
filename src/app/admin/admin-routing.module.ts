import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LeaverequestsComponent } from './leaverequests/leaverequests.component';
import { HomeComponentAdmin } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from '../Employees/leave/leave.component';
import { ShowLeavesComponent } from '../Employees/show-leaves/show-leaves.component';

const routes: Routes = [
  // {path:"", component:AdminComponent},
  {path:'',component:DashboardComponent},
  { path: 'leaverequests', component: LeaverequestsComponent },
  {path:"leave", component: LeaveComponent},
  {path:"leavesshow",component:ShowLeavesComponent},
  
  { path: '**', redirectTo: '' } // Redirect unknown routes to home or a not-found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
