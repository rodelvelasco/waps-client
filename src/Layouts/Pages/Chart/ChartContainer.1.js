import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import LineSmooth from "../../Chart/LineSmooth";

type State = {

}
type Props = {
    dashboardState : Object,
    fetchDashboard: Function,
    resetDashboard: Function
}

class DashboardContainer extends PureComponent<Props, State> {

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
            <div>
                <div>
                      <div className="col-md-12" style={{display: 'flex', marginBottom: '30px'}}>
                        <div className="col-md-9" style={{ marginLeft: '20px', marginRight: '20px', border: '1px solid', paddingTop: '20px'}}>
                          <LineSmooth
                            series={[30, 40, 45, 50, 49, 60, 70, 91]}
                            categories={[30, 40, 45, 50, 49, 60, 70, 91]}
                            maxVal={600}
                            label={['Temperature']}
                            unit={'Farenheiht'}
                          />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '0px', marginLeft: '20px', marginRight: '20px'}}>
                            <div class="div-chart-sum">
                                <div>
                                  <ul>
                                      <li>
                                        <a className="btn-today">
                                          Average
                                        </a>
                                      </li>
                                      {/* <li>
                                        <a className="btn-today">
                                          Maximum
                                        </a>
                                      </li>
                                      <li>
                                        <a className="btn-today">
                                          Minimum
                                        </a>
                                      </li> */}
                                  </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-12" style={{display: 'flex', marginBottom: '30px'}}>
                        <div className="col-md-9" style={{ marginLeft: '20px', marginRight: '20px', border: '1px solid', paddingTop: '20px'}}>
                          <LineSmooth
                            series={[30, 40, 45, 50, 49, 60, 70, 91]}
                            categories={[30, 40, 45, 50, 49, 60, 70, 91]}
                            maxVal={600}
                            label={['Temperature']}
                            unit={'Farenheiht'}
                          />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px',}}>
                            <div class="div-chart-sum">
                              <div>
                                <ul>
                                    <li>
                                      <a className="btn-today">
                                        Average
                                      </a>
                                    </li>
                                    {/* <li>
                                      <a className="btn-today">
                                        Maximum
                                      </a>
                                    </li>
                                    <li>
                                      <a className="btn-today">
                                        Minimum
                                      </a>
                                    </li> */}
                                </ul>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-md-12" style={{display: 'flex', marginBottom: '30px'}}>
                        <div className="col-md-9" style={{ marginLeft: '20px', marginRight: '20px', border: '1px solid'}}>
                          <LineSmooth
                            series={[30, 40, 45, 50, 49, 60, 70, 91]}
                            categories={[30, 40, 45, 50, 49, 60, 70, 91]}
                            maxVal={600}
                            label={['Temperature']}
                            unit={'Farenheiht'}
                          />
                        </div>
                        <div className="col-md-3" style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px',}}>
                            <div class="div-chart-sum">
                                <div>
                                  <ul>
                                      <li>
                                        <a className="btn-today">
                                          Average
                                        </a>
                                      </li>
                                      {/* <li>
                                        <a className="btn-today">
                                          Maximum
                                        </a>
                                      </li>
                                      <li>
                                        <a className="btn-today">
                                          Minimum
                                        </a>
                                      </li> */}
                                  </ul>
                                </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </React.Fragment>
    );
  }
}

export default withRouter(DashboardContainer);
