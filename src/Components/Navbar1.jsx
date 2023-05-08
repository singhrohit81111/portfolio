import React ,{useState} from 'react'
import './style1.scss';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

export default function Navbar1() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  }
  return (
    <div className='hh0'>
      <div className='home10'>
        <div className='h110'>Portfolio</div>
        <div className='h120'>
          <Link to='/Home'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Projects'>Projects</Link>
          <a href='https://drive.google.com/file/d/1GUCorNlt_kFCe5DDImH41eRMuW54gQMK/view?usp=share_link' target='_blank'>Resume</a>
          <Link to='/Contact'>Contact</Link>
        </div>
        <span><FaBars onClick={handleClick} /></span>
      </div>
      {toggle && (<div className="dd0">
        <Link to='/Home'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Projects</Link>
        <a href='https://drive.google.com/file/d/1GUCorNlt_kFCe5DDImH41eRMuW54gQMK/view?usp=share_link' target='_blank'>Resume</a>
        <Link to='/Contact'>Contact</Link>
      </div>)}
    </div>
  )
}
