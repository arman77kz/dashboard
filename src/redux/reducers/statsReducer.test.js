import statsReducer from '../reducers/statsReducer';
import { SET_STATS } from '../actions';

describe('statsReducer', () => {
  const initialState = {
    stats: {
      increase: 0,
      decrease: 0,
      chartData: [],
    },
  };

  it('should return the initial state', () => {
    expect(statsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_STATS', () => {
    const stats = { increase: 10, decrease: 5, chartData: [] };
    const action = {
      type: SET_STATS,
      payload: stats,
    };
    const expectedState = {
      stats,
    };
    expect(statsReducer(initialState, action)).toEqual(expectedState);
  });
});
