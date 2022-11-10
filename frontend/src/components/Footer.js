import React from 'react'
import { FaGithub,FaFacebook, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='footer'>
        <div className="social-icons">
            <a href="#github"><FaGithub/></a>
            <a href="#facebook"><FaFacebook/></a>
            <a href="#linkedin" id='linkedin'><FaLinkedin/></a>
        </div>
        
        <div className="credit">
            created by <span>Dung Truong Duc</span> | all rights reserved
        </div>
    </section>
  )
}

export default Footer