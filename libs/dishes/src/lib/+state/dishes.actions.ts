import { createAction, props } from '@ngrx/store';
import { DishesEntity } from './dishes.models';

export const init = createAction('[Dishes Page] Init');

export const loadDishesSuccess = createAction(
  '[Dishes/API] Load Dishes Success',
  props<{ dishes: DishesEntity[] }>()
);

export const loadDishesFailure = createAction(
  '[Dishes/API] Load Dishes Failure',
  props<{ error: any }>()
);
