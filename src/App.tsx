import {useEffect, useState} from "react";

const App = () => {

  const[users, setUsers]=useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(user => {
          setUsers(user);
        });

    return()=>{
      console.log('hi');
    }

  },[]);

  return (
      <>
        {
          users.map(user => <div key={user.id}>{user.name}</div>)
        }
      </>
  )
}

export default App
