import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DishesEffects } from './dishes.effects';
import * as DishesActions from './dishes.actions';

describe('DishesEffects', () => {
  let actions: Observable<any>;
  let effects: DishesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DishesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(DishesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: DishesActions.init() });

      const expected = hot('-a-|', {
        a: DishesActions.loadDishesSuccess({ dishes: [] })
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
