import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [SharedComponent, SpinnerComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
      closeButton: true,
      newestOnTop: true,
      progressBar: true,
    }),
    NgxSpinnerModule,
  ],
  exports: [ToastrModule, NgxSpinnerModule, SpinnerComponent],
})
export class SharedModule {}
