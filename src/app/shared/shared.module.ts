import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../Employees/footer/footer.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent,FooterComponent,DashboardComponent]
})
export class SharedModule { }
