import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Maverick test dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(148, 221, 1,0.2)',
      borderColor: 'rgba(148, 221, 1, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(148, 221, 1, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(148, 221, 1, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class LineDemo extends Component {
  render() {
    return (
      <div className="maverick-chart">
        <Line ref="chart" data={data} width={50}
    height={50}
    options={{
        maintainAspectRatio: false
    }} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}