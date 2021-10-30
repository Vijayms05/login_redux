import React from 'react';

import '../../style/Signup.css'
//images
import signin from '../../images/Sign_up.png';
import resetpassword from '../../images/Reset_password.png'
import readingbook from '../../images/Reading_book.png'
import readingbooks from '../../images/Reading_books.png'
import certificate from '../../images/Certificate.png'
import student from '../../images/Frame.png'
import professional from '../../images/FrameOne.png';
import professionallearn from '../../images/Learn_from _anywhere.png'
//logos
import logo from '../../images/logo/logo.png';
import google from '../../images/logo/google.png'
import twitter from '../../images/logo/twitter.png'
import linkedin from '../../images/logo/linkedin.png'
import search from '../../images/search.png'

//icons
import emaillogo from '../../images/email_icon.png'
// import lock from '../../images/lock_icon.png'
// import eye from '../../images/eye_icon.png'


//images
// import contact from '../../images/logo/side_bar/contact.png'
// import setting from '../../images/logo/side_bar/setting.png'
// import rupee from '../../images/logo/side_bar/rupees.png'
// import report from '../../images/logo/side_bar/report.png'
// import tests from'../../images/logo/side_bar/test.png'
// import home from '../../images/logo/side_bar/home.png'


// export const MySubscriptions =()=>(
//     <img src={home} alt="icon" />
// )
// export const TestIcon =()=>(
//     <img src={tests} alt="icon" />
// )
// export const ReportIcon =()=>(
//     <img src={report} alt="icon" />
// )
// export const RupeeIcon =()=>(
//     <img src={rupee} alt="icon" />
// )

// export const SettingIcon =()=>(
//     <img src={setting} alt="icon" />
// )

// export const ProfileIcon =()=>(
//     <img src={contact} alt="icon" />
// )

//icons
export const EmailIcon=()=>(
    <img src={emaillogo} alt="icon" />
)

//search
export const SearchIcon =()=>(
    <img src={search} alt="icon" />
)


//logo
export const Logo = () => (
    <img src={logo} alt="logo" />
)
export const GoogleLogo = () => (
    <img src={google} alt="logo" width="100%" />
)
export const LinkedinLogo = () => (
    <img src={linkedin} alt="logo" width="100%" />
)
export const TwitterLogo = () => (
    <img src={twitter} alt="logo" width="100%" />
)
export const FrameLogo = () => (
    <img src={student} alt="logo" />
)
export const FrameOneLogo = () => (
    <img src={professional} alt="logo" />
)


//image
export const SiginImage = () => (  
    <img src={signin} alt="logo" width="100%"/>
)

export const ResetpasswordImage = () => (
    <img src={resetpassword} alt="logo" width="90%" />
)
export const ReadbookImage = () => (
    <img src={readingbook} alt="logo" width="90%" />
)
export const Certificate = () => (
    <img src={certificate} alt="logo" width="90%" />
)
export const ReadbookOneImage = () => (
    <img src={readingbooks} alt="logo" width="90%" />
)
export const ProfessionalLean = () => (
    <img src={professionallearn} alt="logo" width="90%" />
)