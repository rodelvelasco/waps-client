import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineSmooth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: props.categories
        },
        stroke: {
          curve: 'smooth',
          width: 5,
          colors: ['#0000FF'] // #FFFF00 yellow, blue #0000FF, white #FFFFFF
        },
        grid: {
          show: true,
          borderColor: 'gray',
          strokeDashArray: 1,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
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
          floating: true,
          style: {
            fontSize:  '16px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'yellow'
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
              type="line"
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