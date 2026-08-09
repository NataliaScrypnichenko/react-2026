const baseURL="https://jsonplaceholder.typicode.com"
export const urls = {
    users:{
        allUsers:baseURL+"/users",
        byId:(id:number)=>{
            return baseURL + '/'+id

        }
    },
    posts:{}
}
