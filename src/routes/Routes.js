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
import Professional from '../screens/professional/Professional';
import TestMainScreen from '../screens/TestScreen/TestMainScreen';
import QuestionPage from '../screens/TestScreen/QuestionPage';
import Schoolstudent from '../screens/student/Schoolstudent';
import Studentgroup from '../screens/student/Studentgroup';
import SettingScreens from '../screens/setting/SettingScreens';
import ProfileScreen from '../screens/profile/ProfileScreen';
import FillQusetionScreen from '../screens/TestScreen/FillQusetionScreen';
import VideoRecorderScreen from '../screens/TestScreen/VideoRecorderScreen';
import AudioRecorderScreen from '../screens/TestScreen/AudioRecorderScreen';
import TestIntro from '../screens/TestScreen/TestIntro';
import TextQusetionScreen from '../screens/TestScreen/TextQusetionScreen';
import SubscriptionDetailScreen from '../screens/subscriptionList/SubscriptionDetailScreen';
import Onboardingstudent from '../screens/onboarding/Onboardingstudent';
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
                    <Route path="/subscription-list" component={SubscriptionDetailScreen} />
                    <Route path="/billings" component={BillingScreen} />
                    <Route path="/billings-details" component={BillingDetailScreen} />
                    <Route path="/onboard" component={Onboardingstudent} />
                    <Route path="/test" component={TestMainScreen} />
                    <Route path="/testintro" component={TestIntro} />
                    <Route path="/schoolstudent" component={Schoolstudent} />
                    <Route path="/student" component={Studentgroup} />
                    <Route path="/setting" component={SettingScreens} />
                    <Route path="/proffesional" component={Professional} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/question-page" component={QuestionPage} />
                    <Route path="/fill-question" component={FillQusetionScreen} />
                    <Route path="/text-question" component={TextQusetionScreen} />
                    <Route path="/audiorecord" component={AudioRecorderScreen} />
                    <Route path="/videorecord" component={VideoRecorderScreen} />
                  </Switch>
            </React.Fragment>                
        </Router>
    );
}
export default Routes;

