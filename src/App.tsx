import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./services/user.service.ts";

function App() {
  useEffect(()=>{
     getAllUsers().then(value => console.log(value));

     saveUser({id:1, name:'dss', email:'sfs@fdf'}).then(value => console.log(value));
  },[])

  return (
    <>

    </>
  )
}

export default App
