import './App.css'
import CoursesComponent from "./components/сourses-component/CoursesComponent.tsx";
import {coursesArray} from "./data/coursesArrayList.tsx";

function App() {

  return (
    <>
      {
       <CoursesComponent courses={coursesArray}/>
      }
    </>
  )
}

export default App
