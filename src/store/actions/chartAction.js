
// @flow
import type { BaseAction } from '../types/Action';

export const CHART_ACTIONS = {

  ATTEMPT_TO_GET_CHART: 'chart/@CHART/ATTEMPT_TO_GET_CHART',
  SET_GET_CHART_SUCCEED: 'chart/@CHART/SET_GET_CHART_SUCCEED',
  SET_GET_CHART_FAILURE: 'chart/@CHART/SET_GET_CHART_FAILURE',
  RESET_GET_CHART_STATE: 'chart/@CHART/RESET_GET_CHART_STATE',

};

/* SEARCH RATES */
export const attemptToGetChart =  (data: Object): BaseAction  => ({
  type: CHART_ACTIONS.ATTEMPT_TO_GET_CHART,
  payload: data
});
export const setGetChartSucceed = (payload: Object): BaseAction => ({
  type: CHART_ACTIONS.SET_GET_CHART_SUCCEED,
  payload
});

export const setGetChartFailure = (payload: Object): BaseAction => ({
  type: CHART_ACTIONS.SET_GET_CHART_FAILURE,
  payload
});
export const resetGetChartState = (): BaseAction => ({
  type: CHART_ACTIONS.RESET_GET_CHART_STATE
});