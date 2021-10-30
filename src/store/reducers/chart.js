import type { BaseAction } from '../types/Action';
import type { ChartState } from '../types';
import { CHART_ACTIONS } from '../actions/chartAction';
import { ACTION_STATUSES } from '../../utils/constants';

const initialState = (): ChartState => ({

  chart: {
    data: {},
    status: null,
    error: null
  }
});
  

/*
Search chart
 */
const ATTEMPT_TO_GET_CHART = (state: ChartState) => ({
  ...state,
  chart: {
    status: ACTION_STATUSES.PENDING,
    data: {},
    error: null
  }
});

const SET_GET_CHART_SUCCEED = (state: ChartState, action: BaseAction) => ({
  ...state,
  chart: {
    data: action.payload,
    status: ACTION_STATUSES.SUCCEED,
    error: null
  }
});

const SET_GET_CHART_FAILURE = (state: ChartState) => ({
  ...state,
  chart: {
    ...state.chart,
    status: ACTION_STATUSES.FAILED
  }
});
const RESET_GET_CHART_STATE = (state: ChartState) => ({
  ...state,
  chart: initialState().chart
});

const reducer = (state: RateState = initialState(), action: BaseAction) => {
  switch (action.type) {
    case CHART_ACTIONS.ATTEMPT_TO_GET_CHART:
      return ATTEMPT_TO_GET_CHART(state);
    case CHART_ACTIONS.SET_GET_CHART_SUCCEED:
      return SET_GET_CHART_SUCCEED(state, action);
    case CHART_ACTIONS.SET_GET_CHART_FAILURE:
      return SET_GET_CHART_FAILURE(state);
    case CHART_ACTIONS.RESET_GET_CHART_STATE:
      return RESET_GET_CHART_STATE(state);
    

    default:
      return state;
  }
};

export default reducer;
