import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DishesComponent } from './containers/dishes/dishes.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDishes from './+state/dishes.reducer';
import { DishesEffects } from './+state/dishes.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DishesComponent }]),
    StoreModule.forFeature(fromDishes.DISHES_FEATURE_KEY, fromDishes.reducer),
    EffectsModule.forFeature([DishesEffects])
  ],
  declarations: [DishesComponent]
})
export class DishesModule {}
