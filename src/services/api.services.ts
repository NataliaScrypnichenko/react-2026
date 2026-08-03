const findTodosUrl=import.meta.env.VITE_API_BASE_URL+'/todos'

const getTodos=async ()=>{
    fetch(findTodosUrl)
    .then(response => response.json())
};


export {getTodos}
