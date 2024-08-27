import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponentAdmin } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeaverequestsComponent } from './leaverequests/leaverequests.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponentAdmin,
    SidebarComponent,
    LeaverequestsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule { }
