import {useForm} from "react-hook-form";
import type {ICar} from "../madel/ICar.ts";
import {creatAddCars} from "../service/api.car.services.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import carValidator from "../validator/validator.tsx";



const FromCarComponent = () => {

    const {handleSubmit,register, formState:{errors,isValid}}=useForm<ICar>({
        mode:'all',
        //перевіряє правильно внесені данні
        resolver:joiResolver(carValidator)
    });

    const createHandle=(data:ICar)=>{
        creatAddCars(data)
        // console.log(data)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(createHandle)}>
                <div>
                    <input  type="text" {...register('brand' )}/>
                     <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <input  type="number" {...register('price',)}/>
                    <div>{errors.price && <div>{errors.price.message}</div>}</div>
                </div>

                <div>
                    <input type="number" {...register('year')} />
                    <div>{errors.year?.message}</div>
                </div>

                <button disabled={!isValid}>spend</button>
            </form>
        </div>
    );
};

export default FromCarComponent;
