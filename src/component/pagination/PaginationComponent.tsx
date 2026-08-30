import {useSearchParams} from "react-router-dom";



const PaginationComponent = () => {

    const [query,setQuery] = useSearchParams({page: '1'});

               let currentPage = Number(query.get('page') || '1');
    return (
        <div>

            <button onClick={()=>{

               setQuery({page:(++currentPage).toString()})
            }}>вперед</button>

            <button onClick={()=>{
                if (currentPage >1) {// для того щоб не була менша сторінка
                setQuery({page:(--currentPage).toString()})
                }
            }}>назад</button>
        </div>
    );
};

export default PaginationComponent;
