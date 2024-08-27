import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmplModuleRoutingModule } from './empl-module-routing.module';
import { EmplModuleComponent } from './empl-module.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponentEmployee } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    EmplModuleComponent,
    HomeComponentEmployee,
    SidebarComponent,
  ],
  imports: [
    RouterLink,
    CommonModule,
    EmplModuleRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class EmplModuleModule { }
