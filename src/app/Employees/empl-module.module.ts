import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmplModuleRoutingModule } from './empl-module-routing.module';
import { EmplModuleComponent } from './empl-module.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponentEmployee } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmplModuleComponent,
    HomeComponentEmployee,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    EmplModuleRoutingModule,
    SharedModule
  ]
})
export class EmplModuleModule { }
