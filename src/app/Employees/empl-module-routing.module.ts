import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplModuleComponent } from './empl-module.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [{path:'',component:DashboardComponent},
  {path:"leave",component:LeaveComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplModuleRoutingModule { }
