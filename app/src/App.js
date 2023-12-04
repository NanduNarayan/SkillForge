import './App.css';
import { getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import { courses,users } from './Firebase/config'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { initializeDataAction } from './redux/actions'
import { useDispatch } from 'react-redux';
import Landing from './Pages/Landing';
import Courses from './Pages/Courses';
import CourseInfo from './Pages/CourseInfo';
import DashBoard from './Pages/DashBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: "/courses/:id",
    element: <CourseInfo />
  },
  {
    path: "/user/:userid/dashboard",
    element: <DashBoard />
  }
])


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    async function getData() {
      const courseData = await getDocs(courses);
      const userData=await getDocs(users)
      const courseDocs = courseData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      const userDocs=userData.docs.map(doc => ({ ...doc.data(), id:doc.id}))
      dispatch(initializeDataAction({courses: courseDocs, users: userDocs}))
    }
    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (

    <RouterProvider router={router} />

  )
}

export default App;
