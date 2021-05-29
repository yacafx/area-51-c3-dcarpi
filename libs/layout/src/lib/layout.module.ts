import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@dc/material';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule {}
