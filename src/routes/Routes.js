import React from 'react'
import { createBrowserHistory } from 'history'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Signup from '../screens/signup/Signup';
import Login from '../screens/login/Login';
import ResetPassword from '../screens/resetpassword/ResetPassword';
import HomeScreen from '../screens/home/Home';
import BillingScreen from '../screens/BillingScreen/BillingScreen';
import BillingDetailScreen from '../screens/BillingDetailScreen/BillingDetailScreen';
import  Profile from '../screens/profile/ProfilePage';
import ProfileScreen from '../screens/profile/ProfileScreen';
import Professional from '../screens/professional/Professional';
export const history = createBrowserHistory();

 const Routes = () => {
    return (
        <Router history={history}>
            <React.Fragment>
            <Switch>
                    <Route exact  path="/" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/resetpassword" component={ResetPassword} />
                    <Route path="/home" component={HomeScreen} />
                    <Route path="/billings" component={BillingScreen} />
                    <Route path="/billings-details" component={BillingDetailScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/professional" component={Professional} />
                  </Switch>
            </React.Fragment>                
        </Router>
    );
}
export default Routes;

