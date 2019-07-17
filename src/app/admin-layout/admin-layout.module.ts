import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './layer/header/header.component';
import { SidebarComponent } from './layer/sidebar/sidebar.component';

@NgModule({
  declarations: [AdminLayoutComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
