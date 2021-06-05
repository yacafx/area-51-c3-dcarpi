import { Action } from '@ngrx/store';

export enum DishesActionTypes {
  LoadDishes = '[Dishes Page] Load Dishes',
  LoadDishesSuccess = '[Dishes API] Load Dishes Success',
  LoadDishesFail = '[Dishes API] LoadDishes Fail'
}

export class LoadDishes implements Action {
  readonly type = DishesActionTypes.LoadDishes;
}
export class LoadDishesSuccess implements Action {
  readonly type = DishesActionTypes.LoadDishesSuccess;
  constructor(public payload: unknown) {}
}

export class LoadDishesFail implements Action {
  readonly type = DishesActionTypes.LoadDishesFail;
  constructor(public payload: unknown) {}
}

export type DishesActions = LoadDishes | LoadDishesSuccess | LoadDishesFail;
