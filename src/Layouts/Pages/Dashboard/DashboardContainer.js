import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import RadialStroked from "../../Chart/RadialStroked";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

type State = {

}

type Props = {
    dashboardState : Object,
    fetchDashboard: Function,
    resetDashboard: Function
}
// let timer = 60;

let isLoading = false;
let timeInterval = 30000;



class DashboardContainer extends PureComponent<Props, State> {

  constructor(props: Props, context: Context) {
    super(props, context);
    this.state = {
    }
    this.timeMsg = 'Until refresh';
    this.timerLimit = 30;
    this.deviceData = {
      Altitude: 0,
      Created: "",
      Humidity: 0,
      Light: 0,
      Nitrogen: 0,
      Phosphorous: 0,
      Potassium: 0,
      Pressure: 0,
      SoilMoisture: 0,
      Temperature: 0,
      WaterFlow: 0
    }
  }


  componentWillMount() {
    console.log('componentWillMount');
    // const {fetchDashboard, resetDashboard } = this.props;
    setTimeout(() => {
      console.log('componentWillMount refreshing ...');
      this.props.fetchDashboard('all');
		}, 1000);
  }

  componentDidMount() {
    console.log('componentDidMount', this.timer);
    this.timer = setInterval(() => {
      this.isLoading = true;
      console.log('componentDidMount refreshing ...');
      this.props.fetchDashboard('all');
    },(30000))
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { fetchDashboard, resetDashboard, dashboardState } = this.props;
    console.log('dashboardState', dashboardState);
    console.log('dashboardState data', dashboardState.data);
    let data = [] ; 
    if (dashboardState && dashboardState.status === 'Succeed') {
      console.log('deviceData ', new Date());
      console.log('deviceData', dashboardState.data.data[0]);
      this.deviceData = dashboardState.data.data[0];
      this.setState({
				...this.state,
        data: dashboardState.data.data[0]
      })
      console.log('deviceData', this.deviceData);
      console.log('this.state', this.state);
      // console.log('this.state.data.Temperature', this.state.data.Temperature);
      this.isLoading = false;
    } 

    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 1) {
        this.timeMsg = 'Refreshing';
        return <div className="timer" style={{color: 'red', 'fontSize': '10px'}}>0</div>;
      } else {
        this.timeMsg = 'Until Refresh';
      return (
        <div className="timer">
          <div className="value" style={{color: 'yellow', 'fontSize': '10px'}}>{remainingTime}</div>
          {/* <div className="text">Refresh in&nbsp;{remainingTime}&nbsp;seconds</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>  */}
        </div>
      );
    }
    };

    return (
    
        <React.Fragment>
            {/* <div style={{'margin-left': '50px'}}>
                <p style={{color: 'white'}}>Reading @ Oct 23, 2021 10:30AM</p>
            </div> */}
            
            <br/>
            {!this.isLoading &&
            <div style={{ display: this.isLoading ? "none" : "block" }}>
              <div style={{'margin-left': '50px', display: 'flex'}}>
                <CountdownCircleTimer
                  isPlaying
                  duration={30}
                  colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                  size={30}
                  strokeWidth={3}
                  onComplete={() => [true, 1000]}
                >
                  {renderTime}
                </CountdownCircleTimer>
                <span style={{color: 'white', 'font-size': '14px'}}>&nbsp;&nbsp;{this.timeMsg}</span>
                <span style={{color: 'white', 'fontSize': '14px'}}>&nbsp;&nbsp;&nbsp;Data shown are collected recorded on&nbsp;{this.deviceData.Created}</span>
              </div>
              <br/>
              <div className="mt-inner">
                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Temperature]}
                        maxVal={600}
                        label={['Temperature']}
                        unit={'Farenheiht'}
                      />
                      </div>
                    </div>
                  </div>

                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Pressure]}
                        label={['Pressure (psi)']}
                        unit={'psi'}
                      />
                      </div>
                    </div>
                  </div>


                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Altitude]}
                        label={['Altitude (mbar)']}
                        unit={'mbar'}
                      />
                      </div>
                    </div>
                  </div>

                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Humidity]}
                        label={['Humidity']}
                        unit={''}
                      />
                      </div>
                    </div>
                  </div>

                  <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.SoilMoisture]}
                        label={['Soil Moisture (%)']}
                        unit={'percent'}
                      />
                      </div>
                    </div>
                  </div>

                  <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Light]}
                        label={['Light Intensity (lux)']}
                        unit={'lux'}
                      />
                      </div>
                    </div>
                  </div>

                  <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.WaterFlow]}
                        label={['Flow Meter (per min)']}
                        unit={'per min'}
                      />
                      </div>
                    </div>
                  </div>

                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Nitrogen]}
                        label={['Nitrogen (mg/dL)']}
                        unit={'mg/dL'}
                      />
                      </div>
                    </div>
                  </div>

                   <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Phosphorous]}
                        label={['Phosphorous (mg/dL)']}
                        unit={'mg/dL'}
                      />
                      </div>
                    </div>
                  </div>

                  <div class="div-dash">
                    <div class="row dashpad div-dash-head">
                      <div class="row st-no-pad-no-margin">
                      <RadialStroked
                        series={[this.deviceData.Potassium]}
                        label={['Potassium (ppm)']}
                        unit={'ppm'}
                      />
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            }
        </React.Fragment>
    );
  }
}

export default withRouter(DashboardContainer);
