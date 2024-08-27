import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../Employees/footer/footer.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'; // Correct import
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, DashboardComponent]
})
export class SharedModule { }
