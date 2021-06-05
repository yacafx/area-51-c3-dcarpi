import { Dish } from '@dc/models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as DishesActions from './dishes.actions';
import { DishesEntity } from './dishes.models';

export const DISHES_FEATURE_KEY = 'dishes';

export interface State extends EntityState<DishesEntity> {
  selectedId?: string | number; // which Dishes record has been selected
  loaded: boolean; // has the Dishes list been loaded
  error?: string | null; // last known error (if any)
}

export interface DishesPartialState {
  readonly [DISHES_FEATURE_KEY]: State;
}

export const dishesAdapter: EntityAdapter<DishesEntity> = createEntityAdapter<DishesEntity>();

export const initialState: State = dishesAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const dishesReducer = createReducer(
  initialState,
  on(DishesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(DishesActions.loadDishesSuccess, (state, { dishes }) =>
    dishesAdapter.setAll(dishes, { ...state, loaded: true })
  ),
  on(DishesActions.loadDishesFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return dishesReducer(state, action);
}
