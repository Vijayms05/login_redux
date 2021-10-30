import React from 'react'
import { createBrowserHistory } from 'history'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import  Signup from '../../screens/signup/Signup';
import  Login  from '../login/Login'
import  Resetpassword from '../reset-password/Resetpassword';

 import StudentGroup from '../pages/studentGroup/StudentGroup';
 import CollegeStudent from '../pages/collegeStudent/CollegeStudent';
import SchoolStudent from '../pages/schoolStudent/SchoolStudent';

 import Student  from '../pages/student/Student'
//  import Professional  from '../pages/professional/Professional';
 import  ProfessionalOne  from '../pages/professionalOne/ProfessionalOne'; 
 import  Home  from '../home/Home';

import Profile from '../sidebarpage/profile/Profile'

import Mysubscription from '../sidebarpage/home/MySubscription'
import Setting from '../sidebarpage/setting/Setting'
import Report from '../sidebarpage/reports/Report'
import BaselineReport from '../sidebarpage/reports/BaselineReport ';
import SkillBuilding from '../sidebarpage/reports/SkillBuilding';
import CertificationReport from '../sidebarpage/reports/CertificationReport';

import Billing from '../sidebarpage/billing/Billing'
import BillingPrice from '../sidebarpage/billing/BillingPrice'

import Tests from '../sidebarpage/tests/Tests'
import SkillBuildingtest from '../sidebarpage/tests/SkillBuildingtest'
import BaselineTest from '../sidebarpage/tests/BaselineTest';
import TestQuestion from '../sidebarpage/tests/TestQuestion';
import MainContent from '../maincontent/MainContent';
import Example from '../../screens/example';

export const history = createBrowserHistory();

 const Routes = () => {
    return (
        <Router history={history}>
            <React.Fragment>
            <Switch>
                    <Route exact path="/Example" component={Example} />  
                    <Route path="/signup" component={Signup} />
                    <Route path="/" component={Home} />  
                    <Route path="/login" component={Login} />
                    <Route path="/resetpassword" component={Resetpassword} />
                    {/* Professional */}
                     {/* <Route  path="/professional" component={Professional} /> */}
                    <Route  path="/professionalOne" component={ProfessionalOne} /> 
                    {/* Student */}
                     <Route  path="/student" component={Student} />                          
                     <Route  path="/studentGroup" component={StudentGroup} />   
                    <Route  path="/schoolStudent" component={SchoolStudent} />    
                    <Route  path="/collegeStudent" component={CollegeStudent} />    
                    {/*Sidebar pages */}
                    <Route path="/mysubscription" component={Mysubscription} />

                    <Route  path="/profile" component={Profile} />
                   

                    <Route path="/setting" component={Setting} />

                    <Route path="/reports" component={Report} />
                    <Route path="/baselinereport" component={BaselineReport} />
                    <Route path="/skillbuilding" component={SkillBuilding} />
                    <Route path="/certificationreport" component={CertificationReport} />

                    <Route path="/billing" component={Billing} />
                    <Route path="/billingprice" component={BillingPrice} />

                    <Route path="/tests" component={Tests} />
                    <Route path="/skillbuildingtest" component={SkillBuildingtest} />
                    <Route path="/baselineTest" component={BaselineTest} />
                    <Route path="/testQuestion" component={TestQuestion} />
                    <Route path="/mainContent" component={MainContent} />
                </Switch>
            </React.Fragment>                
        </Router>
    );
}
export default Routes;

