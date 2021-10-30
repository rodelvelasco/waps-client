// @flow
import { connect } from 'react-redux';
import ChartContainer from './ChartContainer';

import {attemptToGetChart,resetGetChartState
} from '../../../store/actions/chartAction';
import {
    chartStateSelector
} from '../../../store/selectors/chartSelector';


const mapStateToProps = store => ({
    chartState: chartStateSelector(store)
});

const mapDispatchToProps = dispatch => ({
    fetchChart: (data) => dispatch(attemptToGetChart(data)),
    resetChart: () => dispatch(resetGetChartState())   
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartContainer);