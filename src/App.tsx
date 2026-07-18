import './App.css'
import {simpsons} from "./data/simpsons.ts";
import CharacterComponent from "./components/CharacterComponent/CharacterComponent.tsx";





function App() {


  return (
    <>
      {
        simpsons.map((simpson,index)=><CharacterComponent key={index} simpson={simpson}/>)
      }
    </>
  )
}

export default App
