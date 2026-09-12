import './App.css'
import {Outlet} from "react-router";
import Menu from "./menu/Menu.tsx";

function App() {

  return (
    <>
           <Menu/>
           <Outlet/>
    </>
  )
};

export default App
