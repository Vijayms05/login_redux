

import { Logo } from '../logo/index'
//icons
import profile from '../../images/logo/side_bar/contact.png'
import setting from '../../images/logo/side_bar/setting.png'
import rupee from '../../images/logo/side_bar/rupees.png'
import report from '../../images/logo/side_bar/report.png'
import tests from'../../images/logo/side_bar/test.png'
import home from '../../images/logo/side_bar/home.png'

import { Nav } from 'react-bootstrap';

const Sidebar =()=>{
  return(
    
    <div className="main-sidebar border-end">                        
      <div className="mt-5 mx-4">
          <Logo />
      </div>  
      <h6 className="mb-3" style={{marginLeft:'40px'}}>
          measure to lead
      </h6>
      <h5 className="mb-0 text-start px-2 fw-normal">
          Welcome back,
      </h5>
      <h5 className="mb-3 px-2 ">
          Sierra Ferguson
      </h5>
      <div className=" mb-4 px-3 ">
          <p className="text-primary text-center" 
              style={{backgroundColor:'lightgrey', width:'150px',height:'25px', fontSize:'15px'}}
          >Your plan: Free</p>
      </div>
      <h5 className="text-primary px-4 fw-bold mb-3">
          Menu
      </h5>
      <Nav variant="tabs" className="flex-column">
          <Nav.Item>
              <Nav.Link eventKey="mainContent">
              <img src={home} alt="home" className=" mx-2 mb-2" />  
                  My Subscriptions
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="tests">
              <img src={tests} alt="tests" className="mx-2 mb-2"/> 
                  Tests
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="report">
              <img src={report} alt="reports" className="mx-2 mb-2"/> 
                  Reports
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="billing">
              <img src={rupee} alt="billing" className="mx-2 mb-2"/>
                  Billing
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="setting">
              <img src={setting} alt="setting" className="mx-2 mb-2"/>
                  Setting
              </Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="profile">
              <img src={profile} alt="tests" className="mx-2 mb-2" />
                  Profile
              </Nav.Link>
          </Nav.Item>
      </Nav>
    </div>    
  );
}
export default Sidebar


