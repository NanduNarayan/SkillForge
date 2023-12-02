import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../css/coursePage.css'
import '../css/statusBadge.css'

function StatusBadge({ status }) {

    const statusOpen = (
        <div className="open badge">
            Open
        </div>
    )
    const statusInProgress = (
        <div className="in-progress badge">
            In Progress
        </div>
    )
    const statusClosed = (
        <div className="closed badge">
            Closed
        </div>
    )
    const statusSetter = (status) => {
        if (status) {
            if (status === "Open") {
                return statusOpen
            } else if (status === "Closed") {
                return statusClosed
            } else if (status === "In Progress") {
                return statusInProgress
            }
        }
    }

    return (
        <>
            {statusSetter(status)}
        </>
    )

}

function CourseInfo() {
    const [dropActive, setDropActive] = useState(false)
    const { id } = useParams();
    const course = useSelector(state => state.courses.find(item => item.id === id))
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
                        </div>
                        <div className="description">
                            <h4>Prerequisites</h4>
                            <ul name="prereq-list">
                                {course.prerequisites.map((item, index) => (
                                    <li key={index}>

                                        {item}
                                    </li>
                                ))}
                            </ul>
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
