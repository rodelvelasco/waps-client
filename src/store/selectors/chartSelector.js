import { createSelector } from 'reselect';

const getChartReducer = (state) => state.chart;

export const chartStateSelector = createSelector(
  getChartReducer, data => data.chart
);