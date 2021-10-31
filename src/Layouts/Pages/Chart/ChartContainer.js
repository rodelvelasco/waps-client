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

class ChartContainer extends PureComponent<Props, State> {

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
    }
    this.chartData = []
  }


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
                <div>
                      <div className="col-md-12" style={{display: 'flex', marginBottom: '30px'}} id={data.name}>
                          <div className="col-md-9" style={{ marginLeft: '20px', marginRight: '20px', border: '1px solid', paddingTop: '20px'}} id={data.name + '_a'}>
                            <AreaTimeSeries/>
                          </div>
                          <div className="col-md-3" style={{ marginTop: '0px', marginLeft: '20px', marginRight: '20px'}}>
                              <div className="div-chart-sum">
                                  <div>
                                    <ul>
                                        <li>
                                          <a>Average&nbsp;:&nbsp;10</a>
                                        </li>
                                        <li>
                                          <a>Maximum&nbsp;:&nbsp;20</a>
                                        </li>
                                        <li>
                                          <a>Minimum&nbsp;:&nbsp;1</a>
                                        </li>
                                    </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
                <div>
                    {
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
