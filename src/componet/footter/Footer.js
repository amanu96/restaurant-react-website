import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
          <InstagramIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
      </div>
      <p>&copy; 2022 EthiopianTestyFood.com</p>
    </div>
  )
}

export default Footer