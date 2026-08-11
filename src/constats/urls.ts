const baseUrl="https://jsonplaceholder.typicode.com"
export const urls = {
    users:{
        allUsers:baseUrl+"/users",
        byId:(id:number)=>{
            return baseUrl + '/'+id

        }
    },
    posts:{
        getAllPosts:baseUrl+"/posts",
        byId:(id:number)=>{
            return baseUrl + '/'+id
        },
        userPostById:(id:number)=>{
            return baseUrl + '/posts?userId='+id
        }
    }
}
