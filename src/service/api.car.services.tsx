import * as axios from "axios";


const axiosInstance = axios.create({
    baseURL:"http://bigbird.space/carsAPI/v1",
    headers:{"Content-Type":"application/json"}
});

export const getAllCars = async ():Promise<void> => {
    const responseCars= await axiosInstance.get('/cars')
    console.log(responseCars)

}

