import type {FC} from "react";
import type {ICar} from "../model/ICar.ts";


type TypePropsCars ={
    car:ICar;
}

const CarComponent:FC<TypePropsCars> = ({car}) => {
    return (
        <div>
            <div className={'car_div'}>
                <p>{car.id}</p>
                <p>{car.brand}</p>
                <p>{car.price}</p>
                <p>{car.year}</p>
            </div>
        </div>
    );
};

export default CarComponent;
