import './App.css'
import MyComponent from "./componets/MyComponent.tsx";

function App() {
  return (
    <>
        {/*text={'hello 1'} це аргумент і назва його промс*/}
        <MyComponent text={'hello 1'} />
        {/*{MyComponent({text:'hello'})}*/}
    </>
  )
}

export default App
