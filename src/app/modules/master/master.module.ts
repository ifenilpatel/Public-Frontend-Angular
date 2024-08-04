import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { DepartmentComponent } from './components/department/department.component';
import { DesignationComponent } from './components/designation/designation.component';


@NgModule({
  declarations: [
    MasterComponent,
    DepartmentComponent,
    DesignationComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
