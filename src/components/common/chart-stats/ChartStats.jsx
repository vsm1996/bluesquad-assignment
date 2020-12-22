import React, { Component } from 'react'

import './ChartStats.css'

class ChartStats extends Component {
  state = { stats: {} }
  async componentDidMount() {
    const { id } = this.props
    await this.fetchMissionStats(id).then(
      stats => this.setState({ stats })
    )
  }
  render() {
    const { stats } = this.state
    return (stats.num_started ? this.renderStats() : null);
  }

  renderStats = () => {
    const { stats } = this.state
    return (
      <React.Fragment>
        <td className="started">{stats.num_started}</td>
        <td className="completed">{stats.num_completed}</td>
        <td className="rejected">{stats.num_rejected}</td>
      </React.Fragment>)
  }

  // fetch start, completed, rejected stats for each row
  fetchMissionStats = async (id) => {
    const token = localStorage.getItem('jwtToken')
    const data = await fetch(`https://mock-api.bluesquad.co/missions/${id}/stats`, {
      headers: {
        'Authorization': token
      }
    })
    return data.json()
  }

}

export default ChartStats;