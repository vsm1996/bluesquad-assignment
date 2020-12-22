import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Activity from '../../components/activity/Activity';
import TableHead from '../../components/common/table-head/TableHead';
import TableBody from '../../components/common/table-body/TableBody';

import './DashboardPage.css'

class DashboardPage extends Component {
  state = {
    logData: [],
    columns: ['Type', 'Name', '# started', '# completed', '# rejected', 'Start date', 'End date'],
    startData: [],
    completeData: []
  }

  componentDidMount() {
    this.fetchLogData()
      .then(({ data }) => {
        this.setState({ logData: data })
      })
      .catch(err => { throw err })
  }


  render() {
    const { logData, columns, startData, completeData } = this.state
    return (
      <div className="dashboard">
        <div className="dashboard__header">
          <h1 className="dashboard__title">Missions</h1>
          <Link className="btn-logout" onClick={this.handleLogout} to='/'>Logout</Link>
        </div>

        <div className="dashboard__chart">
          <h2> Activity </h2>
          <Activity start={startData} complete={completeData} />
        </div>

        <div className="dashboard__log">
          <h2> Log </h2>
          <table className="dashboard__table">
            <TableHead columns={columns} />
            <TableBody data={logData} getMissionData={this.fetchMissionData} />
          </table>
        </div>

      </div>
    )
  }

  // fetch table data
  fetchLogData = async () => {
    const token = localStorage.getItem('jwtToken')
    const data = await fetch('https://mock-api.bluesquad.co/missions', {
      headers: {
        'Authorization': token
      }
    })
    return data.json()
  }

  // fetch activity data
  fetchMissionData = (e) => {
    this.fetchStartMissionData(e).then(({ data }) => {
      this.setState({ startData: data })
    })
    this.fetchCompleteMissionData(e).then(({ data }) => {
      this.setState({ completeData: data })
    })

  }

  // fetch start date values
  fetchStartMissionData = async (mission) => {
    const token = localStorage.getItem('jwtToken')
    const data = await fetch(`https://mock-api.bluesquad.co/time-series/missions/${mission}/start_mission?step=1day&range=1year`, {
      headers: {
        'Authorization': token
      }
    })
    return data.json()
  }

  // fetch end date values
  fetchCompleteMissionData = async (mission) => {
    const token = localStorage.getItem('jwtToken')
    const data = await fetch(`https://mock-api.bluesquad.co/time-series/missions/${mission}/complete_mission?step=1day&range=1year`, {
      headers: {
        'Authorization': token
      }
    })
    return data.json()
  }

  handleLogout = () => {

    localStorage.removeItem('jwtToken')
  }

}

export default DashboardPage;