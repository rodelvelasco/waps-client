import React from "react";
import Chart from "react-apexcharts";

class RadialStroked extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			maxVal: props.maxVal,
			series: props.series,
			options: {
				chart: {
					height: 500,
					type: 'radialBar',
					offsetY: -10
				},
				plotOptions: {
					radialBar: {
						range: [1, 1000] ,
						startAngle: -135,
						endAngle: 135,
						// hollow: {
						// 	margin: 1,
						// 	size: "50%",
						// 	background: "gray"
						// },
						dataLabels: {
							name: {
								fontSize: '18px',
								color: "white",
								offsetY: 100
							},
							value: {
								offsetY: -10, // 76,
								fontSize: '30px',
								color: "white",
								formatter: function (val) {
									// return val + '' + props.unit;
									return val;
									// return (val * this.props.maxVal) / 100
									
								}
							}
						}
					}
				},
				fill: {
					colors: ['#E91E63'], // // '#F44336', '#E91E63', '#9C27B0' #FFFF00 yellow, blue #0000FF, white #FFFFFF
					type: 'gradient',
					gradient: {
							shade: 'dark',
							shadeIntensity: 0.15,
							inverseColors: false,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [0, 50, 65, 91]
					},
				},
				stroke: {
					dashArray: 0,
					// show: true,
					curve: 'smooth',
					lineCap: 'butt',
					colors: ['#FFFF00'], // #FFFF00 yellow, blue #0000FF, white #FFFFFF
					width: 2,
				},
				labels: props.label,
			},
		};
	}

	  render() {
		
		let dataValue = this.state.series;

		// if (this.state.maxval) {
			// dataValue = (this.state.series * 100) / 1000;
		// }

		// let dataValue2 = [(this.state.series[0] * 100) / this.state.maxVal];

		// console.log('this.state', this.state);
		console.log('this.state.series', this.state.series);
		// console.log('this.state.maxval', this.state.maxval);
		// console.log('dataValue', dataValue);
		//  console.log('dataValue2', dataValue2);

		// function valueToPercent (value) {
		// 	return (value * 100) / max
		// } 
		return (
			<div id="card">
				<div id="chart">
					<Chart options={this.state.options} series={dataValue} type="radialBar" height={250} />
				</div>
			</div>
		);
	  }
	}

export default RadialStroked;
