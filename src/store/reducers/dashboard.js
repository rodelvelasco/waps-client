import type { BaseAction } from '../types/Action';
import type { DashboardState } from '../types';
import { DASHBOARD_ACTIONS } from '../actions/dashboardAction';
import { ACTION_STATUSES } from '../../utils/constants';

const initialState = (): DashboardState => ({

  dashboard: {
    data: {},
    status: null,
    error: null
  }
});
  

/*
Search dashboard
 */
const ATTEMPT_TO_GET_DASHBOARD = (state: DashboardState) => ({
  ...state,
  dashboard: {
    status: ACTION_STATUSES.PENDING,
    data: {},
    error: null
  }
});

const SET_GET_DASHBOARD_SUCCEED = (state: DashboardState, action: BaseAction) => ({
  ...state,
  dashboard: {
    data: action.payload,
    status: ACTION_STATUSES.SUCCEED,
    error: null
  }
});

const SET_GET_DASHBOARD_FAILURE = (state: DashboardState) => ({
  ...state,
  dashboard: {
    ...state.dashboard,
    status: ACTION_STATUSES.FAILED
  }
});
const RESET_GET_DASHBOARD_STATE = (state: DashboardState) => ({
  ...state,
  dashboard: initialState().dashboard
});

const reducer = (state: RateState = initialState(), action: BaseAction) => {
  switch (action.type) {
    case DASHBOARD_ACTIONS.ATTEMPT_TO_GET_DASHBOARD:
      return ATTEMPT_TO_GET_DASHBOARD(state);
    case DASHBOARD_ACTIONS.SET_GET_DASHBOARD_SUCCEED:
      return SET_GET_DASHBOARD_SUCCEED(state, action);
    case DASHBOARD_ACTIONS.SET_GET_DASHBOARD_FAILURE:
      return SET_GET_DASHBOARD_FAILURE(state);
    case DASHBOARD_ACTIONS.RESET_GET_DASHBOARD_STATE:
      return RESET_GET_DASHBOARD_STATE(state);
    

    default:
      return state;
  }
};

export default reducer;
