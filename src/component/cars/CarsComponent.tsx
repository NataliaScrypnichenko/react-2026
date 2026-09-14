import {useEffect, useState} from "react";
import type {ICar} from "../../model/ICar.ts";
import {getAllCars} from "../../services/api.car.services.tsx";
import CarComponent from "./CarComponent.tsx";
import './CarsComponent.css'


const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);
     const[error,setError]= useState<string>('')

      useEffect(() => {
          getAllCars()
            .then(value => setCars(value))
            .catch(() => {
                setError('Не вдалося отримати список автомобілів');

            });
      }, []);

    return (
        <div className={'container_div'}>
            {error && <p>{error}</p>}
            {
                cars.map((car) => (<CarComponent car={car} key={car.id} />))
            }
        </div>
    );
};

export default CarsComponent;
