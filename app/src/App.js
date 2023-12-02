import './App.css';
import { getDocs } from 'firebase/firestore'
import { useEffect } from 'react'
import { courses } from './Firebase/config'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { initializeDataAction } from './redux/actions'
import {useDispatch} from 'react-redux';
import Landing from './Pages/Landing';
import Courses from './Pages/Courses';
import CourseInfo from './Pages/CourseInfo';

const router=createBrowserRouter([
  { 
    path: '/',
    element:<Landing/>
  },
  { 
    path:'/courses',
    element:<Courses/>
  },
  { 
    path:"/courses/:id",
    element:<CourseInfo/>
  }
])


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    async function getData() {
      const data = await getDocs(courses)
      const docs = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log(docs)
      dispatch(initializeDataAction(docs))
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
