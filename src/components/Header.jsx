import React from 'react';
import profilePic from '../assets/img.jpeg';

const Header = () => {
  return (
    <>
      <img className="header--pic" src={profilePic} alt='Profile Picture' />
    </>
  );
};

export default Header;
