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

import Schoolstudent from '../screens/student/Schoolstudent';
import Studentgroup from '../screens/student/Studentgroup';
import Professional from '../screens/professional/Professional';
import Onboardingstudent from '../screens/onboarding/Onboardingstudent';
import Collegegroup from '../screens/student/Collegegroup';

import HomeScreen from '../screens/home/Home';
import BillingScreen from '../screens/BillingScreen/BillingScreen';
import BillingDetailScreen from '../screens/BillingDetailScreen/BillingDetailScreen';

import TestMainScreen from '../screens/TestScreen/TestMainScreen';
import QuestionPage from '../screens/TestScreen/QuestionPage';

import SettingScreens from '../screens/setting/SettingScreens';
import ProfileScreen from '../screens/profile/ProfileScreen';
import FillQusetionScreen from '../screens/TestScreen/FillQusetionScreen';
import VideoRecorderScreen from '../screens/TestScreen/VideoRecorderScreen';
import AudioRecorderScreen from '../screens/TestScreen/AudioRecorderScreen';
import TestIntro from '../screens/TestScreen/TestIntro';
import TextQusetionScreen from '../screens/TestScreen/TextQusetionScreen';
import SubscriptionDetailScreen from '../screens/subscriptionList/SubscriptionDetailScreen';

import ReportScreen from '../screens/ReportScreen/ReportScreen';
import BaseLineDetails from '../screens/ReportScreen/BaseLineDetails';
import CertificationDetails from '../screens/ReportScreen/CertificationDetails';
import SkillBuildingReportList from '../screens/ReportScreen/SkillBuildingReportList';
import SkillBuildingResult from '../screens/ReportScreen/SkillBuildingResult';
import DummyQuestionPage from '../screens/TestScreen/DummyQuestionPage'
import TextRecordScreen from '../screens/TestScreen/TextRecordScreen'
import PlayQuestionScreen from '../screens/TestScreen/PlayQuestionScreen';
import QuestionAnsRecordScreen from '../screens/TestScreen/QuestionAnsRecordScreen';

import Audioplayer from '../component/dummyquestion/audioAndvideos/Audioplayer'
// import Profile from '../component/sidebarpage1/profile/Profile';
import ResultPage from '../screens/TestScreen/ResultPage';
import FileUpload from '../component/FileUpload/FileUpload';

// import DummyPost from '../dummy/DummyPost';

export const history = createBrowserHistory();

const Routes = (props) => {
  return (
    <Router history={history}>
      <React.Fragment>
        <Switch>
          {/* Dummy */}
          {/* <Route  path="/" component={DummyPost} /> */}
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/onboard" component={Onboardingstudent} />
          <Route path="/schoolstudent" component={Schoolstudent} />
          <Route path="/professional" component={Professional} />
          <Route path="/student" component={Studentgroup} />
          <Route path="/collegstudent" component={Collegegroup} />

          <Route path="/subscription-list" component={SubscriptionDetailScreen} />
          <Route path="/billings" component={BillingScreen} />
          <Route path="/billings-details" component={BillingDetailScreen} />

          <Route path="/test" component={TestMainScreen} />
          <Route path="/testintro" component={TestIntro} />

          <Route path="/report" component={ReportScreen} />
          <Route path="/baseline" component={BaseLineDetails} />
          <Route path="/certificate-result" component={CertificationDetails} />
          <Route path="/skill-building-list" component={SkillBuildingReportList} />
          <Route path="/skill-building-result" component={SkillBuildingResult} />

          <Route path="/setting" component={SettingScreens} />
          <Route path="/profile" component={ProfileScreen} />
          {/* <Route path="/profile" component={Profile} /> */}
          <Route path="/question-page" component={QuestionPage} />
          <Route path="/fill-question" component={FillQusetionScreen} />
          <Route path="/text-question" component={TextQusetionScreen} />
          <Route path="/audiorecord" component={AudioRecorderScreen} />
          <Route path="/videorecord" component={VideoRecorderScreen} />
          <Route path="/textrecord" component={TextRecordScreen} />
          <Route path="/play-question" component={PlayQuestionScreen} />
          <Route path="/ques-ans-play" component={QuestionAnsRecordScreen} />
          {/*Result bar */}
          <Route path="/result-page" component={ResultPage} />

          <Route path="/file-upload" component={FileUpload} />

          <Route path="/dummy" component={DummyQuestionPage} />
          <Route path="/audioplayer" component={Audioplayer} />
          {/* <Route path="/playrecorder" component={PalyerRecorderScreen} /> */}
          <Route path="/*" component={Login} />

        </Switch>
      </React.Fragment>
    </Router>
  );
}
export default Routes;

