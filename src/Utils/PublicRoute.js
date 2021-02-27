import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
 
// handle the public routes
function PublicRoute({ component: Component, isAuthenticated, ...rest }) {

  return (
    <Route {...rest} render={(props) => !isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/home' }} />} />
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.user_data.isAuthenticated
})
 
export default connect(mapStateToProps, {})(PublicRoute);