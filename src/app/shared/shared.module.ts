import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../Employees/footer/footer.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'; // Correct import
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveComponent } from '../Employees/leave/leave.component';
import { ShowLeavesComponent } from '../Employees/show-leaves/show-leaves.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LeaveComponent,
    ShowLeavesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, FooterComponent, DashboardComponent,LeaveComponent,ShowLeavesComponent]
})
export class SharedModule { }
