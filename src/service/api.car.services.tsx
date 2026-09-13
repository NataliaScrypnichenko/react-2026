import * as axios from "axios";
import type {ICar} from "../madel/ICar.ts";


const axiosInstance = axios.create({
    baseURL:"http://bigbird.space/carsAPI/v1",
    headers:{"Content-Type":"application/json"}
});

export const getAllCars = async ():Promise<ICar[]> => {
    const axiosResponse= await axiosInstance.get<ICar[]>('/cars')
    const cars= axiosResponse.data;
    return cars;
};

export const creatAddCars = async (car:ICar):Promise<void> => {
    await axiosInstance.post<ICar[]>('/cars',car)
}
