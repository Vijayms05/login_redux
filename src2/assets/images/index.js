import React from 'react';

import '../../style/Signup.css';
import signin from '../images/Sign_up.png';
import logo from '../images/logo.png';
import email from '../images/email_icon.png';
import password from '../images/lock_icon.png';

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
