import { all } from 'redux-saga/effects';
import dashboardSaga from './dashboardSaga';
export function* rootSaga() {
  yield all([
    dashboardSaga()
]);
}
