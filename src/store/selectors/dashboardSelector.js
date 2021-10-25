import { createSelector } from 'reselect';

const getDashboardReducer = (state) => state.dashboard;

export const dashboardStateSelector = createSelector(
  getDashboardReducer, data => data.dashboard
);