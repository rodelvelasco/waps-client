// @flow
import { connect } from 'react-redux';
import DashboardContainer from './DashboardContainer';

import {attemptToGetDashboard,resetGetDashboardState
} from '../../../store/actions/dashboardAction';
import {
    dashboardStateSelector
} from '../../../store/selectors/dashboardSelector';


const mapStateToProps = store => ({
    dashboardState: dashboardStateSelector(store)
});

const mapDispatchToProps = dispatch => ({
    fetchDashboard: (data) => dispatch(attemptToGetDashboard(data)),
    resetDashboard: () => dispatch(resetGetDashboardState())   
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);