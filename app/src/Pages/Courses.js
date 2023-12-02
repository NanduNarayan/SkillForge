import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../css/courses.css'

function SearchBar() {
    const inputRef = useRef("");
    const submitForm = (e) => {
        e.preventDefault();

    }
    return (
        <form>
            <input
                type="search"
                className="search-bar"
                placeholder="Search keywords [eg: instructor name]"
                onChange={(e) => inputRef.current = e.target.value} />
            <button type="submit" className="search-btn" onClick={e=>submitForm} />
        </form>
    )
}

function Courses() {
    const state = useSelector(store => store.courses?.map(course => (
        {
            name: course.name,
            instructor: course.instructor,
            description: course.description,
            id: course.id
        }))||null)
    console.log(state)
    const navigate = useNavigate();
    const navigateCourse=(id=null)=>{
        if(id){
            navigate(`/courses/${id}`);
        }
    }
    return (
        <div className="container">
            <SearchBar />
            {
                Array.isArray(state) ? (
                    state.map((item, index) => (
                        <div className='course-card' key={index}
                            onClick={()=>navigateCourse(item.id) }
                        >
                            <img src={item.thumbnail} sx={{width:"100%",height:"30%"}} alt={`${item.id}-thmbnail`}/>
                            <h2>
                                {item.name}
                            </h2>
                            <h4>Tutor - {item.instructor}</h4>
                            <p> {item.description} </p>
                        </div>
                    ))
                ) : (<>NO COURSES MATCH YOUR INTEREST</>)
            }
        </div>
    )
}

export default Courses