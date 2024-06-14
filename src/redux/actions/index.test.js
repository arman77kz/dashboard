import { setUsers, setStats, SET_USERS, SET_STATS } from '../actions';

describe('actions', () => {
  it('should create an action to set users', () => {
    const users = [{ id: 1, name: 'John Doe' }];
    const expectedAction = {
      type: SET_USERS,
      payload: users,
    };
    expect(setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to set stats', () => {
    const stats = { increase: 10, decrease: 5, chartData: [] };
    const expectedAction = {
      type: SET_STATS,
      payload: stats,
    };
    expect(setStats(stats)).toEqual(expectedAction);
  });
});
