import {useSearchParams} from "react-router-dom";


const PlaginationComponent = () => {

    const [query,setQuery] = useSearchParams({page:'1'});

    let currentPage=Number(query.get('currentPage') || '1')

    return (
        <div>
            <button onClick={() =>(
                setQuery({page:(++page).toString()})
            ) }>

            prev</button>
            <button>

           next </button>
        </div>
    );
};

export default PlaginationComponent;
