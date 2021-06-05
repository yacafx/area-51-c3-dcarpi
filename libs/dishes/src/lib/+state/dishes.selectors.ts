import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DISHES_FEATURE_KEY,
  State,
  DishesPartialState,
  dishesAdapter
} from './dishes.reducer';

// Lookup the 'Dishes' feature state managed by NgRx
export const getDishesState = createFeatureSelector<DishesPartialState, State>(
  DISHES_FEATURE_KEY
);

const { selectAll, selectEntities } = dishesAdapter.getSelectors();

export const getDishesLoaded = createSelector(
  getDishesState,
  (state: State) => state.loaded
);

export const getDishesError = createSelector(
  getDishesState,
  (state: State) => state.error
);

export const getAllDishes = createSelector(getDishesState, (state: State) =>
  selectAll(state)
);

export const getDishesEntities = createSelector(
  getDishesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDishesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDishesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
