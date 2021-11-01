import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import LineSmooth from "../../Chart/LineSmooth";
import AreaTimeSeries from "../../Chart/AreaTimeSeries";

type State = {

}
type Props = {
    chartState : Object,
    fetchChart: Function,
    resetChart: Function
}

let isLoading = false;
class ChartContainer extends PureComponent<Props, State> {

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
      dtGrp: 'thisyear'
    }
    this.chartData = []
  }

  handleDtSlctChange = (dtGrp) => {
    this.isLoading = true;
    if (dtGrp && dtGrp.length) {
      this.setState({
        ...this.state,
        dtGrp: dtGrp,
      });
    }
	  this.props.fetchChart(dtGrp ? dtGrp : this.state.dtGrp);
	};

  componentWillMount() {
    console.log('componentWillMount');
    const {fetchChart } = this.props;
    fetchChart('thisweek');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchChart('thisweek');
  }

  render() {
    const { chartState } = this.props;
    console.log('chartState', chartState);
    console.log('chartState data', chartState.data);
    let data = [] ; 
    if (chartState && chartState.status === 'Succeed') {
      console.log('chartData ', new Date());
      console.log('chartData', chartState.data.data);
      this.chartData = chartState.data.data;
      this.setState({
				...this.state,
        data: chartState.data.data
      })
      console.log('deviceData', this.chartData);
      console.log('this.state', this.state);
      // console.log('this.state.data.Temperature', this.state.data.Temperature);
      this.isLoading = false;
    } 

    return (
        <React.Fragment>
            <div>
                    <div style={{marginBottom: '30px', marginLeft: '40px'}}>
                        <button id="today" onClick={() => this.handleDtSlctChange('today')} className="dt-range" >
                        Today
                        </button>&nbsp;
                        <button id="thiswk" onClick={() => this.handleDtSlctChange('thiswk')}>
                        This Week
                        </button>&nbsp;
                        <button id="lastwk" onClick={() => this.handleDtSlctChange('lastwk')} >
                        Last Week
                        </button>&nbsp;
                        <button id="thismonth" onClick={() => this.handleDtSlctChange('thismonth')}>
                        This Month
                        </button>&nbsp;
                        <button id="lastmonth" onClick={() => this.handleDtSlctChange('lastmonth')} >
                        Last Month
                        </button>&nbsp;
                        <button id="thisyear" onClick={() => this.handleDtSlctChange('thisyear')} className="active">
                        This Year
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button id="refresh" onClick={() => this.handleDtSlctChange(null)}>
                        Refresh
                        </button>
                    </div>
                    <div>
                        { (!this.isLoading && this.chartData && this.chartData.length) &&
                          this.chartData.map(data => (
                            <div className="col-md-12" style={{display: 'flex', marginBottom: '30px'}} id={data.name}>
                              <div className="col-md-9" style={{ marginLeft: '20px', marginRight: '20px', border: '1px solid', paddingTop: '20px'}} id={data.name + '_a'}>
                                <LineSmooth
                                  series={data.series}
                                  seriesName={data.seriesName}
                                  categories={data.categories}
                                  maxVal={data.maxVal}
                                  name={data.name}
                                  unit={data.unit}
                                  color={data.color}
                                />
                              </div>
                              <div className="col-md-3" style={{ marginTop: '0px', marginLeft: '20px', marginRight: '20px'}} id={data.name + '_b'}>
                                  <div className="div-chart-sum" id={data.name + '_ba'}>
                                      <div id={data.name + '_bb'}>
                                        <ul>
                                            <li id={data.name + '1'}>
                                              <a>Average&nbsp;:&nbsp;{data.avg}</a>
                                            </li>
                                            <li id={data.name + '2'}>
                                              <a>Maximum&nbsp;:&nbsp;{data.max}</a>
                                            </li>
                                            <li id={data.name + '3'}>
                                              <a>Minimum&nbsp;:&nbsp;{data.min}</a>
                                            </li>
                                        </ul>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          ))
                        }
                    </div>
            </div>
        </React.Fragment>
    );
  }
}

export default withRouter(ChartContainer);
