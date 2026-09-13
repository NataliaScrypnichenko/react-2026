import * as axios from "axios";
import type {ICar} from "../madel/ICar.ts";


const axiosInstance = axios.create({
    baseURL:"http://bigbird.space/carsAPI/v1",
    headers:{"Content-Type":"application/json"}
});

export const getAllCars = async ():Promise<ICar[]> => {
    const {data}= await axiosInstance.get<ICar[]>('/cars')
    // console.log(data)
    return data
}

// export const getAllUsers = async ():Promise<IUser[]> => {
//     //саме в {data} лежить інформація яка потрібна нам і буде містити такі параметри як в <IUser[]>
//     const {data}= await axiosInstance.get<IUser[]>("/users");
//     return data;// далі використовується так само як і раніше useState
//     // const response= await axiosInstance.get<IUser[]>("/users");
//     // console.log(response)   http://185.69.152.209/carsAPI/v1
// }http://bigbird.space/carsAPI/v1/cars
