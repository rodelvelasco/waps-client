
// @flow
import type { BaseAction } from '../types/Action';

export const DASHBOARD_ACTIONS = {

  ATTEMPT_TO_GET_DASHBOARD: 'dashboard/@DASHBOARD/ATTEMPT_TO_GET_DASHBOARD',
  SET_GET_DASHBOARD_SUCCEED: 'dashboard/@DASHBOARD/SET_GET_DASHBOARD_SUCCEED',
  SET_GET_DASHBOARD_FAILURE: 'dashboard/@DASHBOARD/SET_GET_DASHBOARD_FAILURE',
  RESET_GET_DASHBOARD_STATE: 'dashboard/@DASHBOARD/RESET_GET_DASHBOARD_STATE',

};

/* SEARCH RATES */
export const attemptToGetDashboard =  (data: Object): BaseAction  => ({
  type: DASHBOARD_ACTIONS.ATTEMPT_TO_GET_DASHBOARD,
  payload: data
});
export const setGetDashboardSucceed = (payload: Object): BaseAction => ({
  type: DASHBOARD_ACTIONS.SET_GET_DASHBOARD_SUCCEED,
  payload
});

export const setGetDashboardFailure = (payload: Object): BaseAction => ({
  type: DASHBOARD_ACTIONS.SET_GET_DASHBOARD_FAILURE,
  payload
});
export const resetGetDashboardState = (): BaseAction => ({
  type: DASHBOARD_ACTIONS.RESET_GET_DASHBOARD_STATE
});