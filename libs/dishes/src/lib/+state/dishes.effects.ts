import { Injectable } from '@angular/core';
import { Dish } from '@dc/models';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DishesService } from '../services/dishes.service';
import * as DishesActions from './dishes.actions';
import { DishesActionTypes } from './dishes.actions';
@Injectable()
export class DishesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DishesActionTypes.LoadDishes),
      fetch({
        run: (action) => {
          this.service.getDishes().pipe(
            map((dishes: Dish[]) =>
              DishesActions.loadDishesSuccess({ payload: dishes })
            ),
            catchError(() => of(DishesActions.loadDishesFail))
          );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return DishesActions.loadDishesFail({ payload: error });
        }
      })
    )
  );

  constructor(private actions$: Actions, private service: DishesService) {}
}
