import React, { Component } from 'react'
import TextInput from '../text-input/TextInput';
import Button from '../button/Button'

import logo from '../../../assets/logo512.png'


import './Form.css'

class Form extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    errors: []
  }
  render() {
    const { userEmail, userPassword, errors } = this.state
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <img className="bluesquad-logo" src={logo} alt="bluesquad logo" />
          {errors ? errors.map(error => <small className="error">{error}</small>) : null}
          <TextInput
            name="userEmail"
            type="email"
            label="Email"
            value={userEmail}
            required
            handleChange={this.handleChange} />
          <TextInput
            name="userPassword"
            type="password"
            label="Password"
            value={userPassword}
            required
            handleChange={this.handleChange} />
          <Button
            label="Login"
            type="submit" />
          <small className="terms">Term of use&mdash;Privacy policy</small>
        </form>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault();

    const { userEmail, userPassword } = this.state
    this.authUser(userEmail, userPassword).then((token) => {
      if (token.errors) this.setState({ errors: token.errors })
      else {
        localStorage.setItem('jwtToken', 'Bearer ' + token.jwt)
        this.props.history.push('/dashboard')
      }
    }
    )

  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  authUser = async (email, password) => {
    const data = { 'user': email, 'password': password }
    const tokenData = await fetch('https://mock-api.bluesquad.co/auth',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })

    return tokenData.json()
  }
}

export default Form