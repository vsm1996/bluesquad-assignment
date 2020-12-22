import React, { Component } from 'react'
import Chart from 'chart.js'

class Activity extends Component {
  chartRef = React.createRef()

  componentDidMount() {
    this.buildChart()
  }

  componentDidUpdate() {
    //rebuilds chart on new subject click/update
    this.buildChart()
  }

  //builds out chart with data and labels
  buildChart = () => {
    const { start, complete } = this.props

    const startValues = start.map(({ value }) => value)
    const completeValues = complete.map(({ value }) => value)

    const myChartRef = this.chartRef.current.getContext('2d')
    //fill 'data' below with time series data
    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Missions started',
            data: startValues,
            fill: false,
            borderColor: "rgb(85, 178, 213)"
          },
          {
            label: 'Missions completed',
            data: completeValues,
            fill: false,
            borderColor: "rgb(84, 13, 202)"
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
            ticks: { suggestedMax: 1200 }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    })
  }

  render() {
    return (
      <div className="">
        <canvas id="myChart" ref={this.chartRef} />
      </div>)
  };
}


export default Activity;