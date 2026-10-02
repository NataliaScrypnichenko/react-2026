import './App.css'
import UsersComponent from "./component/UsersComponent.tsx";
import useFetch from "./hooks/useFetch.tsx";

function App() {
   console.log("App");

   useFetch()
  return (
    <>
      <UsersComponent/>
    </>
  )
}

export default App
