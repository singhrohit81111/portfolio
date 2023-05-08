import React from 'react'
import portfolio from '../images/portfolio.png'
import './style.scss';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate=useNavigate();
    const handleClick1=()=>{
        navigate('/projects')
    }
    const handleClick2=()=>{
        navigate('/contact')
    }
    return (
        <div className='home' style={{ backgroundImage: `url(${portfolio})`, minHeight: "100vh", backgroundSize: "60vw 100vh", minWidth: "82vw", backgroundRepeat: "no-repeat" }}>
            <Navbar/>
            <div className='home2'>
                <div className='h21'>
                    <div className='h211'>Hi There!</div>
                    <div className='h212'><span className='s1'>I'M </span><span className='s2'>ROHIT SINGH</span> </div>
                    <div className='h213'>I'm a React.js Developer based in Jalandhar,Punjab.I strives to build immersive and beautiful web appliactions through carefully crafted code and user-centric design.</div>
                    <div className='h214'>
                        <div className='h2141'><button onClick={handleClick1}>PROJECTS</button></div>
                        <div className='h2142'><button onClick={handleClick2}>CONTACT</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
