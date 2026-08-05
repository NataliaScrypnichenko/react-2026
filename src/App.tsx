import './App.css'
import CommentsComponent from "./components/comment-component/comments/CommentsComponent.tsx";
import PostsComponent from "./components/posts-component/Posts/PostsComponent.tsx";
import TodosComponent from "./components/todos-component/Todos/TodosComponent.tsx";

function App() {


  return (
    <>
     <TodosComponent/>
      <PostsComponent/>
      <CommentsComponent/>
    </>
  )
}

export default App
