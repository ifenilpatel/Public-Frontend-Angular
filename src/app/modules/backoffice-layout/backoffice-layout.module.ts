import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeLayoutRoutingModule } from './backoffice-layout-routing.module';
import { BackofficeLayoutComponent } from './backoffice-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    BackofficeLayoutComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, BackofficeLayoutRoutingModule],
})
export class BackofficeLayoutModule {}
