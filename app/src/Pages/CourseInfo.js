import React, {  useState } from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import '../css/coursePage.css'
import '../css/statusBadge.css'
import { StatusBadge } from '../Components/StatusBadge';



function CourseInfo() {
    const navigate=useNavigate();
    const [dropActive, setDropActive] = useState(false)
    const { id } = useParams();
    const course = useSelector(state => state.courses.find(item => item.id === id));
    const userid="101"
    return (
        <>
            {
                course && (
                    <div className="container">
                        <div className="header">
                            <div className="title-block">
                                <h1>{course.name}</h1>
                                <StatusBadge status={course.enrollmentStatus} />
                            </div>
                            <h2>Tutor - {course.instructor}</h2>
                            <h3 style={{ fontStyle: "italic" }}>{course.description}</h3>
                            <button type="button" onClick={()=>{
                                window.alert("Enrollment Successful");
                                navigate(`/user/${userid}/dashboard`)
                                }}>Enroll Now</button>
                            <span>Total Enrolled : {course.students.length}</span>
                        </div>
                        <div className="description">
                            <h4>{course.schedule}</h4>
                            <h4>Course Duration : {course.duration}</h4>
                            <h4>Location : {course.location}</h4>
                            <h4>Prerequisites</h4>
                                {course.prerequisites.map((item, index) => (
                                    <div key={index}>

                                        {item}
                                    </div>
                                ))}
                            <div className="syllabus">
                                <div className="drop"
                                    onClick={() => { setDropActive(prev => !prev) }}
                                >
                                    <h4>Syllabus</h4>
                                </div>
                                <ul name="syllabus-list">
                                    {
                                        dropActive && (
                                            course.syllabus.map((item, index) => (
                                                <l1 key={index}>
                                                    <h5 style={{ fontWeight: "bold" }}>
                                                        Week {item.week}
                                                    </h5>
                                                    <h5>
                                                        Topics Covered - {item.topic}
                                                    </h5>
                                                    <p>
                                                        {item.content}
                                                    </p>
                                                </l1>
                                            ))
                                        )
                                    }
                                </ul>
                            </div>
          
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CourseInfo
