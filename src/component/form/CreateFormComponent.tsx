import {useForm} from "react-hook-form";
import type {ICar} from "../../model/ICar.ts";
import {addCreateCar} from "../../services/api.car.services.tsx";
import {carValidator} from "../../validator/carValidator.tsx";
import {joiResolver} from "@hookform/resolvers/joi";


const CreateFormComponent = () => {

    const{handleSubmit,register,formState:{errors,isValid}} =useForm<ICar>({
        mode:'all',
        resolver:joiResolver(carValidator)
    })

    const createHandle=(data:ICar)=>{
        addCreateCar(data)
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createHandle)}>
                <div>
                    <input type='text' {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type='number' {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type='number' {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                 <button disabled={!isValid}>spend</button>
            </form>

        </div>
    );
};

export default CreateFormComponent;
