import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DishesComponent } from './containers/dishes/dishes.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DishesComponent }])
  ],
  declarations: [DishesComponent]
})
export class DishesModule {}
