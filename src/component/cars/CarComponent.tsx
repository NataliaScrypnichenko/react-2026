import type {FC} from "react";
import type {ICar} from "../../model/ICar.ts";
import './CarComponent.css'

type TypePropsCars ={
    car:ICar;
}

const CarComponent:FC<TypePropsCars> = ({car}) => {
    return (
        <div>
            <div className={'car_div'}>
                <p>id: {car.id}</p>
                <p>brand: {car.brand}</p>
                <p>price: {car.price}</p>
                <p>year: {car.year}</p>
            </div>
        </div>
    );
};

export default CarComponent;
