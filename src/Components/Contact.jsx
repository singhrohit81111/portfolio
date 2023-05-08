import React from 'react'
import Navbar from './Navbar'
import { FaLinkedin, FaFacebookF, FaGooglePlusSquare, FaInstagramSquare } from "react-icons/fa";
import './contactStyle.scss';
import Contactimg from '../images/ContactImg.jpg'

export default function Contact() {
  return (
    <div className='con'>
      <Navbar />
      <div className='con1'>
        <div className='con11'>Contact</div>
        <form className='con0'>
          <div className='con12'>
            <div className="con121">
              <span className='lab'>Name:</span>
              <input type="text" placeholder='Write yout Name here' />
            </div>
            <div className="con122">
              <span className='lab'>E-mail:</span>
              <input type="email" placeholder='Write yout email here' />
            </div>
            <div className="con123">
              <span className='lab'>Subject:</span>
              <input type="text" placeholder='Subject' />
            </div>
            <div className="con124">
              <span className='lab'>Message:</span>
              <input type="text" />
            </div>
            <div className='con125'><button>Submit</button></div>
          </div>
        </form>
        <div className='ic'>
          <a href='https://www.linkedin.com/in/singhrohit81111/' target='_blank'><FaLinkedin size="3vh" /></a>
          <a href="mailto:singhrohit81111@gmail.com" target='_blank'><FaGooglePlusSquare size="3vh" /></a>
          <a href='https://www.facebook.com/singhrohit81111' target='_blank'><FaFacebookF size="3vh" /></a>
          <a href='https://www.instagram.com/singhrohit811/' target='_blank'><FaInstagramSquare size="3vh" /></a>
        </div>
      </div>
    </div>
  )
}
