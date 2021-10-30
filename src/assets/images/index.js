import signin from '../images/Sign_up.png';
import logo from '../images/logo.png';
import email from '../images/email_icon.png';
import password from '../images/lock_icon.png';
import homeIcon from '../images/logo/side_bar/home.png';
import testIcon from '../images/logo/side_bar/test.png';
import reportIcon from '../images/logo/side_bar/report.png';
import rupeesIcon from '../images/logo/side_bar/rupees.png';
import settingIcon from '../images/logo/side_bar/setting.png';
import contactIcon from '../images/logo/side_bar/contact.png';
import searchIc from '../images/search.png';
import playbutton from '../images/playbutton.png';
import cardimage from '../images/cardImage.png'
import eye_icon from '../images/eye_icon.png'
import billing_back from '../images/billing-back.png'
import numbicon from '../images/numb.png'
import scaleIcon from '../images/scale_icon.png'
import forgetpassword from '../images/Reset_password.png';
import upload from '../images/upload.png';
import avatarprofile from '../images/avatarprofile.png';
import learn_from from './Learn_from _anywhere.png'

export const Logo = () => <img className="logo" src={logo} alt="logo" />;

export const SiginImage = () => (
  <img src={signin} alt="signin" className="singImg" />
);
export const EmailIcon = () => (
  <img src={email} alt="email" className="iputIcon" />
);

export const PasswordIcon = () => (
  <img src={password} alt="lock_icon" className="iputIcon" />
);

export const MenuHome = () => (
  <img src={homeIcon} alt="menuHome" className="menuIcon  " />
);
export const TestHome = () => (
  <img src={testIcon} alt="testIcon" className="menuIcon" />
);

export const ReportHome = () => (
  <img src={reportIcon} alt="reportIcon" className="menuIcon" />
);
export const BillingHome = () => (
  <img src={rupeesIcon} alt="rupeesIcon" className="menuIcon" />
);
export const SettingsHome = () => (
  <img src={settingIcon} alt="settingIcon" className="menuIcon" />
);
export const ProfileHome = () => (
  <img src={contactIcon} alt="contactIcon" className="menuIcon" />
);

export const SearchIcon = () => (
  <img src={searchIc} alt="search" className="" />
);
export const PlaybtnIcon = () => (
  <img src={playbutton} alt="search" className="" />
);
export const BookBackImg = () => (
  <img src={cardimage} alt="cardimage" className="" />
);
export const EyeIcon = () => (
  <img src={eye_icon} alt="eye_icon" className="eyeIcon"/>
);
export const  Billingrit= () => (
  <img src={billing_back} alt="billing_back" className="billing_back" />
);
export const  NumbIcon= () => (
  <img src={numbicon} alt="numbicon" className="num-back" />
);
export const  ScaleIcon= () => (
  <img src={scaleIcon} alt="scaleIcon" className="scale-back" />
);
export const ForgetPasswordImage = () => (
  <img src={forgetpassword} alt="forgetpassword" className="images" />
)
export const AvatorProfile = () => (
  <img src={avatarprofile} alt="avatarprofile" className="images" />
)
export const UploadIcon = () => (
  <img src={upload} alt="upload" className="images" />
)
export const Learnprofessional = () => (
  <img src={learn_from} alt="learnfrom" className="images" />
)