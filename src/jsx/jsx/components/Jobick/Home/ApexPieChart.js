import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
		series: [90, 68, 85],
		options: {
			chart: {
			  height: 250,
			  type: "donut",
			},
			dataLabels:{
				enabled: false
			},
			stroke: {
			  width: 0,
			},
			colors:['#1D92DF', '#4754CB', '#D55BC1'],
			
			legend: {
              position: 'bottom',
			  show:false
            },
			responsive: [{
				breakpoint: 1400,
				options: {
					chart: {
						height:200
					},
				}
			}]
		
		},
    };
  }

	render() {
		return (
			<div id="chart">
				<ReactApexChart
				  options={this.state.options}
				  series={this.state.series}
				  type="donut"
				  height={250}
				/>
			</div>
		);
	}
}

export default ApexPieChart;