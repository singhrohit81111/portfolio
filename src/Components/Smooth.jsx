import React from 'react'
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

export default function Smooth() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Projects" element={<Project/>}/>
                <Route path="Contact" element={<Contact/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}






