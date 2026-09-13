import {useEffect, useState} from "react";
import type {ICar} from "../madel/ICar.ts";
import { getAllCars} from "../service/api.car.services.tsx";
import CarComponent from "./CarComponent.tsx";
import './CarsComponent.css'

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars()
            .then(value => setCars(value));

    },[]);

    return (
        <div className={'container'}>
            {
                cars.map((car, index) => (<CarComponent car={car} key={index} />))
            }
        </div>
    );
};

export default CarsComponent;
