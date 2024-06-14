
export const SET_USERS = 'SET_USERS';
export const SET_STATS = 'SET_STATS';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const setStats = (stats) => ({
  type: SET_STATS,
  payload: stats,
});
