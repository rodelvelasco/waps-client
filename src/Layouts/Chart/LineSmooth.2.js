import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineSmooth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          type: 'area',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        fill: {
          // type: 'gradient',
          colors: ['#FF0000', '#87CEEB'],
          opacity: 0.2,
          type: 'solid',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.6,
            stops: [0, 100]
          }
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        // xaxis: {
        //   categories: props.categories,
        //   tickAmount: 6,
        // },
        // xaxis: {
        //   type: 'datetime',
        //   min: new Date('01 Mar 2012').getTime(),
        //   tickAmount: 6,
        // },
        stroke: {
          curve: 'smooth',
          width: 5,
          colors: ['#87CEEB'] // #FFFF00 yellow, blue #0000FF, white #FFFFFF, skybue #87CEEB, red #FF0000
        },
        grid: {
          show: true,
          borderColor: 'gray',
          strokeDashArray: 1,
          position: 'back',
          xaxis: {
              lines: {
                  show: true
              }
          },   
          yaxis: {
              lines: {
                  show: true
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },  
        },
        title: {
          text: props.name,
          align: 'center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'gray'
          },
        }
      },
      series: [
        {
          name: props.seriesName,
          data: props.categories
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div >
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="180px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineSmooth;