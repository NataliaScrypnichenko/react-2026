import {useEffect, useState} from "react";
import type {ICar} from "../../model/ICar.ts";
import {getAllCars} from "../../services/api.car.services.tsx";
import CarComponent from "./CarComponent.tsx";
import './CarsComponent.css'


const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars()
            .then(value => setCars(value));

    },[])

    return (
        <div className={'container_div'}>
            {
                cars.map((car) => (<CarComponent car={car} key={car.id} />))
            }
        </div>
    );
};

export default CarsComponent;
