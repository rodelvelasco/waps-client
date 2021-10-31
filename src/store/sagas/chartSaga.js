// @flow

import { takeLatest, put } from 'redux-saga/effects';
// import TOAST from '../../modules/toastManager';
import axios from 'axios';
import { handleSagaError } from '../../utils/helperFunctions';

import {
  CHART_ACTIONS,
  setGetChartSucceed,
  setGetChartFailure
} from '../actions/chartAction';

const RESOURCE_PREFIX = 'http://localhost:3000/sensors/historical';
const headers = {
  "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  // 'Content-Type' : 'application/json'
  // 'Authorization': `Bearer ${getAuthToken()}`
};


function* getChart(rqst) {
  try {
    console.log('getChart rqst', rqst);
    const response_ = yield axios.get(`${RESOURCE_PREFIX}/${rqst.payload}`, {headers});
    console.log('response_', response_);
    // #FFFF00 yellow, blue #0000FF, white #FFFFFF, skybue #87CEEB, red #FF0000, green #00FF00
    const data = [
      {
        name: 'Temperature',
        series: [30, 40, 45, 50, 49, 60, 70, 91],
        seriesName: '',
        categories: [1633833600001, 1633833600000, 1633833660000, 1633833720000, 1633833780000, 1633833780000,1633833840000, 1633834200000],
        maxVal: 600,
        label: ['Temperature'],
        unit:'Farenheiht',
        avg: 33,
        max: 91,
        min: 30,
        color: '#FF0000'
      },
      {
        name: 'Pressure',
        series: [30, 40, 45, 50, 49, 60, 70, 91],
        seriesName: '',
        categories: [1633833600001, 1633833600000, 1633833660000, 1633833720000, 1633833780000, 1633833780000,1633833840000, 1633834200000],
        maxVal: 600,
        label: ['Pressure'],
        unit:'psi',
        avg: 34,
        max: 91,
        min: 30,
        color: '#87CEEB'
      },
      ,
      {
        name: 'Humidity',
        series: [30, 40, 45, 50, 49, 60, 70, 91],
        seriesName: '',
        categories: [1633833600001, 1633833600000, 1633833660000, 1633833720000, 1633833780000, 1633833780000,1633833840000, 1633834200000],
        maxVal: 600,
        label: ['Pressure'],
        unit:'psi',
        avg: 35,
        max: 91,
        min: 30,
        color: '#00FF00'
      }
    ];
    const response = { data };
    console.log('[fetch chart data]',response);
    yield put(setGetChartSucceed(response));
    console.log('[setGetChartSucceed done]',response);
  } catch (err) {
    const error = handleSagaError(err);
    yield put(setGetChartFailure(error.debug));
    // TOAST.error(error.debug);
  }
}

function* chartSagaWatcher<T>(): Iterable<T> {
  yield takeLatest(CHART_ACTIONS.ATTEMPT_TO_GET_CHART, getChart);
}

export default chartSagaWatcher;
