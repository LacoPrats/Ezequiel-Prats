import React from 'react';
import './headercontact.css';
import { MdLocationOn } from 'react-icons/md';

function HeaderContact() {
  return (
    <>
      <div className="header-contact">
        <div className="location">
          <MdLocationOn className="location-icon" />
          <span>Based in Buenos Aires, Argentina</span>
        </div>
        <a href="#contact" className="btn">Contact me</a>
      </div>
      <hr className="header-divider" />
    </>
  );
}

export default HeaderContact;
