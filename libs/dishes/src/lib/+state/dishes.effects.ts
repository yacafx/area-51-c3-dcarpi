import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as DishesFeature from './dishes.reducer';
import * as DishesActions from './dishes.actions';

@Injectable()
export class DishesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DishesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return DishesActions.loadDishesSuccess({ dishes: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DishesActions.loadDishesFailure({ error });
        }
      })
    )
  );

  constructor(private actions$: Actions) {}
}
