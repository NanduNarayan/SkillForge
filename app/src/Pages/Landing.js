import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/landingPage.css'

function Landing() {
    const navigate=useNavigate();
    const toCourseList=()=>{
        navigate("/courses")
    }
  return (
    <div className='container'>
        <h1>Have a dream job? We'll help you move ahead!!</h1>
        <h2>Learn,Create and Master New Skills Online</h2>
        <button className="landing-btn"
            onClick={toCourseList}
        >View Our Courses</button>
    </div>
  )
}

export default Landing