import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// creates protected route for dashboard
const AuthRoute = ({ path, component: Component, render, ...rest }) => {
  const getToken = () => {
    const token = localStorage.getItem("jwtToken")
    return token.length > 0 ? token : true
  };
  return (<Route
    {...rest}
    path={path}
    render={(props) => {
      if (!getToken()) return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />;
      return Component ? <Component {...props} /> : render(props)
    }}
  />);
}

export default AuthRoute;