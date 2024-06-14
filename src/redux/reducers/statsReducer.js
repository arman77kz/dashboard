import { SET_STATS } from '../actions';

const initialState = {
  stats: {
    increase: 0,
    decrease: 0,
    chartData: [],
  },
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATS:
      return {
        ...state,
        stats: action.payload,
      };
    default:
      return state;
  }
};

export default statsReducer;
