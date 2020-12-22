import React, { Component } from 'react'
import Form from '../../components/common/form/Form'


import './LoginPage.css'

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <Form history={this.props.history} location={this.props.location} />
      </div>
    )
  }
}

export default LoginPage