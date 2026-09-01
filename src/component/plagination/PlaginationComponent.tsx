import {useSearchParams} from "react-router-dom";

const PlaginationComponent = () => {

    const [query, setQuery] = useSearchParams({page: '1'});

    let currentPage = Number(query.get('page') || '1')
    // console.log(currentPage)
    return (
        <div>
            <button onClick={() => {
                if (currentPage < 7) {
                    setQuery({page: (++currentPage).toString()})
                }
            }}>next
            </button>
            <button onClick={() => {
                if (currentPage > 1) {
                    setQuery({page: (--currentPage).toString()})
                }

            }}>
                prev
            </button>

        </div>
    )
        ;
};

export default PlaginationComponent;
