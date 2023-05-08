import React from 'react'
import Navbar1 from './Navbar1';
import Bimage from '../images/Bimage.jpg';
import './style1.scss'

export default function About() {
  return (
    <div className='about' style={{backgroundImage: `url(${Bimage})`,backgroundRepeat:"no-repeat", minHeight: "100vh", backgroundSize: "100vw 100vh" }}>
      <Navbar1/>
      <div className='ab1'>
        <div className='ab2'>
          ABOUT
        </div>
        <div className='ab3'>
          <div className='ab31'>
            I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
          </div>
        </div>

      </div>
      <div className='ab4'>
        <div className='ab001'>SKILLS</div>
        <div className='ab002'>
        <div className='ab41'>
          <div className='ab411'>HTML</div>
          <div className='ab411'>CSS</div>
          <div className='ab411'>Javascript</div>
          <div className='ab411'>React.js</div>
        </div>
        <div className='ab42'>
          <div className='ab421'>React-redux</div>
          <div className='ab421'>Axios</div>
          <div className='ab421'>Sass</div>
          <div className='ab421'>Git</div>
        </div>
        </div>
      </div>
    </div>
  )
}


