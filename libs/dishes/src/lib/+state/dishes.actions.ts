import { Dish } from '@dc/models';
import { Action, createAction, props } from '@ngrx/store';

export enum DishesActionTypes {
  LoadDishes = '[Dishes Page] Load Dishes',
  LoadDishesSuccess = '[Dishes API] Load Dishes Success',
  LoadDishesFail = '[Dishes API] LoadDishes Fail'
}

export const loadDishes = createAction(DishesActionTypes.LoadDishes);

export const loadDishesSuccess = createAction(
  DishesActionTypes.LoadDishes,
  props<{ payload: Dish[] }>()
);
export const loadDishesFail = createAction(
  DishesActionTypes.LoadDishes,
  props<{ payload: any }>()
);

export class LoadDishesFail implements Action {
  readonly type = DishesActionTypes.LoadDishesFail;
  constructor(public payload: unknown) {}
}
