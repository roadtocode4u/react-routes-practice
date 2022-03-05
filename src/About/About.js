import React from 'react'
import './About.css'
import {Routes, Route, Link, useParams} from 'react-router-dom'
import Vaibhavi from './Vaibhavi/Vaibhavi'
import Tejal from './Tejal/Tejal'
import Suraj from './Suraj/Suraj'

function About() {
  const {id} = useParams()
  let url='';
  let name='';

  if (id === '1')
  {
    url = 'https://www.github.com/Vaibhavihole31.png'
    name='Vaibhavi'
  } 
  else if(id === '2') 
  {
    url = 'https://www.github.com/tejalsakore.png'
    name='Tejal'
  }
  else
  {
    url = 'https://www.github.com/surajshende247.png'
    name='Suraj'
  }
  return (
    <div className="about-container">
      <h1>About: {name}</h1>

      <img src={`${url}`} alt="User Image"/>
      <br /> 

      {/* <Link to="vaibhavi"> <button>Vaibhavi</button></Link> 
      <Link to="tejal"> <button>Tejal</button></Link>
      <Link to="suraj"> <button>Suraj</button></Link> */}
     
      {/* <Routes>
        <Route path="vaibhavi" element={<Vaibhavi/>} />
        <Route path="tejal" element={<Tejal/>} />
        <Route path="suraj" element={<Suraj/>} />
      </Routes> */}
    </div>
  )
}

export default About