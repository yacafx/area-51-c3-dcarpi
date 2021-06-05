import { DishesEntity } from './dishes.models';
import { State, dishesAdapter, initialState } from './dishes.reducer';
import * as DishesSelectors from './dishes.selectors';

describe('Dishes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDishesId = (it) => it['id'];
  const createDishesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as DishesEntity);

  let state;

  beforeEach(() => {
    state = {
      dishes: dishesAdapter.setAll(
        [
          createDishesEntity('PRODUCT-AAA'),
          createDishesEntity('PRODUCT-BBB'),
          createDishesEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Dishes Selectors', () => {
    it('getAllDishes() should return the list of Dishes', () => {
      const results = DishesSelectors.getAllDishes(state);
      const selId = getDishesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DishesSelectors.getSelected(state);
      const selId = getDishesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDishesLoaded() should return the current 'loaded' status", () => {
      const result = DishesSelectors.getDishesLoaded(state);

      expect(result).toBe(true);
    });

    it("getDishesError() should return the current 'error' state", () => {
      const result = DishesSelectors.getDishesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
