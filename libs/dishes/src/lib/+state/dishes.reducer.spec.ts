import { DishesEntity } from './dishes.models';
import * as DishesActions from './dishes.actions';
import { State, initialState, reducer } from './dishes.reducer';

describe('Dishes Reducer', () => {
  const createDishesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as DishesEntity);

  beforeEach(() => {});

  describe('valid Dishes actions', () => {
    it('loadDishesSuccess should return set the list of known Dishes', () => {
      const dishes = [
        createDishesEntity('PRODUCT-AAA'),
        createDishesEntity('PRODUCT-zzz')
      ];
      const action = DishesActions.loadDishesSuccess({ dishes });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
