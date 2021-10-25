import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';

type State = {

}
type Props = {
    dashboardState : Object,
    fetchDashboard: Function,
    resetDashboard: Function
}

class SettingContainer extends PureComponent<Props, State> {

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
     }
  }


  componentWillMount() {
    console.log('componentWillMount');
    const {fetchDashboard, resetDashboard } = this.props;
    fetchDashboard();
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchDashboard('all');
  }

  render() {
    const { fetchDashboard, resetDashboard, dashboardState } = this.props;
    return (
    
        <React.Fragment>
            <div >
                <p>SETTING</p>
            </div>
        </React.Fragment>
    );
  }
}

export default withRouter(SettingContainer);
