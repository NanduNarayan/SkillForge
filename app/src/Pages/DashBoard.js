import React  from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function DashBoard() {
    const {userid}=useParams();
    console.log(userid)
    const navigate=useNavigate()
 let user=useSelector(state=>state.users.filter(use=>use.id===userid)[0])
 console.log(user);
// eslint-disable-next-line array-callback-return
const courses=useSelector(state=>state?.courses?.filter(item=>{
    let count=0
    for(let i=0;i<user.enrolledCourses.length;i++){
        if(item.id===user.enrolledCourses[i].id){
            count=count+1
        }
    }
    if(count>0){
        return item
    }
}))
const navigateCourse=(id=null)=>{
    if(id){
        navigate(`/courses/${id}`);
    }
}


  return (
    <div className='container'>
    <h1>Hey!, {user.name}</h1>
    <h3>Welcome Back!</h3>
    <div className="my-courses">
        <h2>My Courses</h2>
        <section>
        {
            Array.isArray(courses) && courses.map(item=>(
                <div className="my-courses" key={item.id} onClick={()=>navigateCourse(item.id)}>
                    <section className="brief">
                        <img src={item.thumbnail} alt="thumb" className="thumbnail"/>
                        <h3>{item.name}</h3>
                        <span>Due by : 12/12/2023</span>
                        <h4>Tutor : {item.instructor}</h4>
                        <input type="checkbox"
                            checked={user.enrolledCourses.filter(x=>x.id===item.id?x.isComplete:false)}
                            className="course-finished"
                            onClick={(e)=>{
                                e.stopPropagation()
                                const {enrolledCourses}=user;
                                enrolledCourses.map(crs=>crs.id===item.id?{...crs,isComplete:!crs.isComplete}:crs)
                            }}/>
                    </section>
                    <section className="progress-bar">
                        <input type="range"
                            value={5}
                            max={10}
                            name="progress"
                            disabled={true}
                            />
                    </section>
                </div>
            ))
        }
        </section>
    </div>
    </div>
  )
}

export default DashBoard