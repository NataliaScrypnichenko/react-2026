import './App.css'
import UsersComponent from "./component/UsersComponent.tsx";

//викликає UsersComponent
function App() {
    // виводим дані щоб видно в якій послідовності вони працюють
 console.log("App");

  return (
    <>
          <UsersComponent/>
    </>
  )
}

export default App
