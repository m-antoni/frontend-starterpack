import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor }  from './store';
import $ from 'jquery';
import { authVerify } from './redux/actions/auth.actions';

// Routes
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

// Public Route
import Login from './components/public/Login';
import Register from './components/public/Register';
import PageNotFound from './components/public/PageNotFound';

// Private Route
import Home from './components/private/Home';
import Navbar from './components/layouts/Navbar';

function App() {

  useEffect(() => {
    store.dispatch(authVerify()); // verify the token 
  },[])


  return (
    <Provider store={store}>
      <Router>
        <PersistGate persistor={persistor}>
            <Fragment>
              <Navbar/>
              <Switch>
                <PublicRoute path="/login" exact component={Login}/>
                <PublicRoute path="/register" exact component={Register}/>

                <PrivateRoute path="/home" exact component={Home} />
                <PublicRoute component={PageNotFound} />
              </Switch>
            </Fragment>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
