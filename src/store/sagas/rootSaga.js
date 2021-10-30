import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';
import chartSaga from './chartSaga';
export function* rootSaga() {
  yield all([
    dashboardSaga(),
    chartSaga()
]);
}
