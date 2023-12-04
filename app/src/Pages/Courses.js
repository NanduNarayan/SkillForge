import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import '../css/courses.css'
import { SearchBar } from '../Components/SearchBar';

function Courses() {
    const navigate = useNavigate();
    const state=useSelector(store=>store.courses.map(course=>(
        {
            name: course.name,
            id: course.id,
            instructor:course.instructor,
            thumbnail:course.thumbnail,
            description:course.description
        }
        )))
    const [courseList,setCourseList]=useState(state||[])

    
    const navigateCourse=(id=null)=>{
        if(id){
            navigate(`/courses/${id}`);
        }
    }
    const getQuery=(q)=>{
        if(q===""){
            setCourseList([...state])
            return
        }
        const capitalizedQ=q.split(" ").map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ");
        console.log(capitalizedQ,q)
        let updatedList=[];
        // eslint-disable-next-line array-callback-return
        state.filter(item=>{
            if(
                item.name.includes(q)||item.name.includes(capitalizedQ)
                ||item.instructor.includes(capitalizedQ)||item.instructor.includes(q)
                ){
                    updatedList.push({...item})
                }
        })
        console.log(updatedList)
        if(updatedList){
            setCourseList(updatedList)
        }else setCourseList([])
    }
    return (
        <div className="container">
            <SearchBar getQuery={getQuery}/>
            {
                courseList.length ? (
                    courseList.map((item, index) => (
                        <div className='course-card' key={index}
                            onClick={()=>navigateCourse(item?.id) }
                        >
                            <img src={item?.thumbnail} className='thumb' alt={`${item.id}-thmbnail`}/>
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