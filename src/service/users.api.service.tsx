import {url} from "../component/constanta/constanta.tsx";

const baseUrl=url

export const getUsers=async<T,> (endpoint:string):Promise<T>=>{
    return  await fetch(`${baseUrl}${endpoint}`)
    .then(res => res.json())

}


