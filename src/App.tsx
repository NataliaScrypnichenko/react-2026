import './App.css'
import {useEffect, useState} from "react";

const App = () => {

  const [posts,setPosts]= useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(value =>
        setPosts(value))

    return () => {}

  },[])




  return (
      <div>
        {
          posts.map(post => (<div>{post.userId}{post.title}</div>))
        }
      </div>
  );
};

export default App;


