import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";


//зчитуємо
const SomeComponent = () => {
    const [query,setQuery] = useSearchParams();

    useEffect(() => {
//витягуємо pg
        const pg = query.get('pg');
        console.log(pg);
//тоді ми можемо створити реквест з пошуковим
        fetch('https://reqres.in/api/users?page='+pg)
        .then(res => res.json())
            .then(value => {
                console.log(value)
            })

    }, [query]);
    return (
        <div>

        </div>
    );
};

export default SomeComponent;
