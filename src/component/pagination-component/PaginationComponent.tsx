import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {
// це хук React Router, який дозволяє читати та змінювати параметри в URL після ?.
    //?page=2&limit=10  оце і є search Params
    //в середину приймає об'єкт=також він повертає масив з об'єктами
    // query=поточний стан наших параметрів, setQuery=це сетер для нього як в useState=це для пошукових запитів
    const [query,setQuery] = useSearchParams({pg:'1'});


    return (
        <div>
            <button onClick={() => {
                //витягуемо парамитри
                const pg = query.get('pg');
                //провіряємо чи існує числове значення
                if (pg) {
                    // конвертуємо в числове значення
                    let currentPage = +pg;
                    //збільшуємо
                    currentPage++
                    setQuery({pg: (currentPage).toString()})
                }
            }}>next
            </button>

            <button onClick={() => {
                const pg = query.get('pg');
                if (pg) {
                    let currentPage = +pg;
                    currentPage--
                    setQuery({pg: (currentPage).toString()})
                }
            }}>prev
            </button>

        </div>
    );
};
//якщо ми можемо вести її в урлу то можемо зчитати її
export default PaginationComponent;
