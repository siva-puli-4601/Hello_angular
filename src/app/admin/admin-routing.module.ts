import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LeaverequestsComponent } from './leaverequests/leaverequests.component';
import { HomeComponentAdmin } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {path:"", component:AdminComponent},
  {path:'',component:DashboardComponent},
  { path: 'leaverequests', component: LeaverequestsComponent },
  
  { path: '**', redirectTo: '' } // Redirect unknown routes to home or a not-found page
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
