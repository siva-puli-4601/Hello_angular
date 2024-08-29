import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../Employees/footer/footer.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'; // Correct import
import { ReactiveFormsModule } from '@angular/forms';
// import { LeaveComponent } from '../leave/leave.component';

import { ShowLeavesComponent } from '../show-leaves/show-leaves.component';
import { LeaveComponent } from '../leave/leave.component';
import { EmployeeSerachComponent } from '../employee-serach/employee-serach.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LeaveComponent,
    ShowLeavesComponent,
    EmployeeSerachComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, DashboardComponent,LeaveComponent,ShowLeavesComponent,EmployeeSerachComponent]
})
export class SharedModule { }
