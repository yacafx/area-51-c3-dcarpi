import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DishesData } from './dishes.reducer';

const getDishesState = createFeatureSelector<DishesData>('dishes');

const getDishes = createSelector(getDishesState, (state) => state.dishes);

const getUser = createSelector(getDishesState, (state) => state.user);

export const dishesQuery = {
  getDishes,
  getUser
};
