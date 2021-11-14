import signin from '../images/sign_up.png';
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
import eye_icon_hid from '../images/eye_icon_hid.png'
import billing_back from '../images/billing-back.png'
import numbicon from '../images/numb.png'
import scaleIcon from '../images/scale_icon.png'
import forgetpassword from '../images/reset_password.png';
import upload from '../images/upload.png';
import avatarprofile from '../images/avatarprofile.png';
import learn_from from './learn_from _anywhere.png';
import circle_left from './circle-left.png'
import circle_right from './circle-right.png'
import arrowLeft from './arrowLeft.png'
import readingbooks from './reading_books.png'
import record_mic_icon from './mic.png'
import play_button from './playbutton.png'
import paus_button from './pausbtn.png'
import frame from './frame.png'
import frame_logo from './frameone.png'
import reading_book from './certificate.png'
import certificate from './reading_book.png'
import shareicon from './shareicon.png'
import feedbackicon from './feedbackicon.png'
import printicon from './printicon.png'
import tickicon from './tick.png'

export const Logo = () => <img className="logo" src={logo} alt="logo" />;

export const SiginImage = () => (
  <img src={signin} alt="signin" className="singImg" />
);
export const Readingbooks = () => (
  <img src={readingbooks} alt="readingbooks" className="singImg" />
);
export const Learnprofessional = () => (
  <img src={learn_from} alt="learnfrom" className="singImg" />
)
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

export const EyeIconHid = () => (
  <img src={eye_icon_hid} alt="eye_icon_hid" className="eyeIcon"/>
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
export const CircleLeft = () => (
  <img src={circle_left} alt="circle_left" className="images" />
)
export const CircleRight = () => (
  <img src={circle_right} alt="circle_right" className="images" />
)
export const LeftArrow = () => (
  <img src={arrowLeft} alt="arrowLeft" className="arrow-left" />
)
export const RecordMicIcon = () => (
  <img src={record_mic_icon} alt="record_mic_icon" className="mic-icon" />
)
export const PlayBtn = () => (
  <img src={play_button} alt="playbutton" className="play-paus-icon" />
)
export const PausBtn = () => (
  <img src={paus_button} alt="paus_button" className="play-paus-icon" />
)
export const FrameLogo = () => (
  <img src={frame_logo} alt="frame_logo" className="frame_logo" />
)
export const FrameOneLogo = () => (
  <img src={frame} alt="frame__onelogo" className="frame__one_logo" />
)
export const Readingbook = () => (
  <img src={reading_book} alt="reading_book" className="read-cert" />
)
export const Professionalbook = () => (
  <img src={certificate} alt="certificate" className="read-cert" />
)
export const ShareIcon = () => (
  <img src={shareicon} alt="shareicon" className="shar-icon-btn" />
)
export const PrintIcon = () => (
  <img src={printicon} alt="printicon" className="shar-icon-btn" />
)
export const FeedbackIcon = () => (
  <img src={feedbackicon} alt="feedbackicon" className="shar-icon-btn" />
)
export const TickIcon = () => (
  <img src={tickicon} alt="feedbackicon" className="tic-icon" />
)