import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Spinner } from '../components/layouts/Spinner';
import { connect } from 'react-redux';

// handle the private routes
function PrivateRoute({ component: Component, isAuthenticated, loading, ...rest }) {

  if(loading === 'verify'){
      return <div className="my-80"><Spinner/></div>
  }

  return (
    <Route
      {...rest}
      render={(props) => isAuthenticated ? 
      <Component {...props} /> : 
      <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}
 
const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.user_data.isAuthenticated
})

export default connect(mapStateToProps, { })(PrivateRoute);