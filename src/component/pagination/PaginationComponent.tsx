import {useSearchParams} from "react-router-dom";



const PaginationComponent = () => {

    const [query,setQuery] = useSearchParams({page: '1'});

    return (
        <div>

            <button onClick={()=>{
               const page = query.get('page');
               if(page){
                        let counterPage=+page;
                        counterPage++;
                        setQuery({page:(counterPage).toString()});
               }
            }}>вперед</button>

            <button onClick={()=>{
                const page = query.get('page');
                if(page){
                    let counterPage=+page;
                    counterPage--;
                    setQuery({page:(counterPage).toString()});
                }
            }}>назад</button>
        </div>
    );
};

export default PaginationComponent;
