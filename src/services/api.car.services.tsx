import  axios from "axios";
import type {ICar} from "../model/ICar.ts";

export const axiosInstance = axios.create({
    baseURL: 'http://bigbird.space/carsAPI/v1',
    headers:{'Content-Type': 'application/json'}
});

export const getAllCars = async ():Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get('/cars');
    const cars =  axiosResponse.data;
    return cars;
};

export const addCreateCar = async (car:ICar): Promise<void> => {
     await axiosInstance.post('/cars', car);
}
