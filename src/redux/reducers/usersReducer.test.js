import usersReducer from '../reducers/usersReducer';
import { SET_USERS } from '../actions';

describe('usersReducer', () => {
  const initialState = {
    users: [],
  };

  it('should return the initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_USERS', () => {
    const users = [{ id: 1, name: 'John Doe' }];
    const action = {
      type: SET_USERS,
      payload: users,
    };
    const expectedState = {
      users,
    };
    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });
});
