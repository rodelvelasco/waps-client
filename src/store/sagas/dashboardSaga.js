// @flow

import { takeLatest, put } from 'redux-saga/effects';
// import TOAST from '../../modules/toastManager';
import axios from 'axios';
import { handleSagaError } from '../../utils/helperFunctions';

import {
  DASHBOARD_ACTIONS,
  setGetDashboardSucceed,
  setGetDashboardFailure
} from '../actions/dashboardAction';


const RESOURCE_PREFIX = 'http://localhost:3000/sensors/all';
const headers = {
  "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  // 'Content-Type' : 'application/json'
  // 'Authorization': `Bearer ${getAuthToken()}`
};


function* getDashboard(rqst) {
  try {
    console.log('getDashboard', rqst);
    const response = yield axios.get(`${RESOURCE_PREFIX}`, rqst.payload,{headers});
    console.log('[fetch dashboard data]',response);
    yield put(setGetDashboardSucceed(response));
    console.log('[setGetDashboardSucceed done]',response);
  } catch (err) {
    const error = handleSagaError(err);
    yield put(setGetDashboardFailure(error.debug));
    // TOAST.error(error.debug);
  }
}

function* dashboardSagaWatcher<T>(): Iterable<T> {
  yield takeLatest(DASHBOARD_ACTIONS.ATTEMPT_TO_GET_DASHBOARD, getDashboard);
}

export default dashboardSagaWatcher;
