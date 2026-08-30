import {useSearchParams} from "react-router-dom";


const PlaginationComponent = () => {

    const [query,setQuery] = useSearchParams({page:'1'});

    let currentPage=Number(query.get('page') || '1')

    return (
        <div>
            <button onClick={() =>(

                setQuery({page:(++currentPage).toString()})
            ) }>prev</button>
            
            <button onClick={() =>(
                setQuery({page:(++currentPage).toString()})
            ) }>next </button>
        </div>
    );
};

export default PlaginationComponent;
