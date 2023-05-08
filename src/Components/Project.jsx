import React from 'react'
import './style.scss';
import Chat from '../images/Chat.png';
import SpaceX from '../images/SpaceX.png';
import Mypage from '../images/Mypage.png';
import Navbar from './Navbar';
import './projectStyle.scss';

export default function Project() {
  return (
    <div className='project'>
      <Navbar />
      <div className='pj1'>Projects</div>
      <div className='pj2'>
        <div className='pj21'>
          <img src={Chat} />
          <div className="pj211">
            <div className='pj2111'>REAL-TIME CHAT APPLICATION</div>
            <div className='pj2112'>The application compromises of 3pages i.e Login ,Register and Chat Interface.Numerous React hooks and React-reach router has been implented for th proper functioning of App.Along with that Sass is used to make app responsive.</div>
            <div className='pj2113'>
              <span className='ps1'>Technologies Used:</span>
              <span className='ps2'>React, Javascript, HTML, SASS, React-Reach-Router</span>
            </div>
            <div className='pj2114'>
              <div className='pbt1'><button><a href='https://chatapp-1ce09.web.app/Login' target='_blank'>LIVE</a></button></div>
              <div className='pbt1'><button><a href='https://github.com/singhrohit81111/chatApp' target='_blank'>Source code</a></button></div>
            </div>
          </div>
        </div>

        <div className='pj21'>
          <img src={SpaceX} />
          <div className="pj211">
            <div className='pj2111'>SpaceX Launch Dashboard</div>
            <div className='pj2112'>SpaceX appllication utilizes Fetch api to fetch the details of SpaceX past and upcoming launches.For the smooth functioning of app React-reach-router is used with React hooks.Also Sass is implemented for responsiveness.</div>
            <div className='pj2113'>
              <span className='ps1'>Technologies Used:</span>
              <span className='ps2'>React, Javascript, HTML, SASS, React-Reach-Router</span>
            </div>
            <div className='pj2114'>
              <div className='pbt1'><button><a href='https://spacex-launch-f827d.web.app/' target='_blank'>LIVE</a></button></div>
              <div className='pbt1'><button><a href='https://github.com/singhrohit81111/spacexLaunch' target='_blank'>Source code</a></button></div>
            </div>
          </div>
        </div>

        <div className='pj21'>
          <img src={Mypage} />
          <div className="pj211">
            <div className='pj2111'>Portfolio</div>
            <div className='pj2112'>Basically Portfolio respresents the work of project, code, About me.This application consists of 4switchable pages i.e. Home, About, Projects and Contact.And this website is also made responsive with the help of Sass and React Hooks.</div>
            <div className='pj2113'>
              <span className='ps1'>Technologies Used:</span>
              <span className='ps2'>React, Javascript, HTML, SASS, React-Reach-Router</span>
            </div>
            <div className='pj2114'>
              <div className='pbt1'><button><a href='https://github.com/singhrohit81111/portfolio' target='_blank'>Source code</a></button></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
