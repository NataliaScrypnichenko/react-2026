в Цьому уроці вивчаю як створювати хуки власні на основі уже існуючих хуків
створюємо в окремі дерикторії називаєм=> hooks=>useFetch.tsx
Хуки можна використовувати або в функціональних компонентах або в інших хуках в реакті для того щоб створити Хук
 достатньо просто описати звичайну функцію але назвати її з префіксом use тобто

const UseFetch = () => {
console.log('useFetch');

    return (
        <div>

        </div>
    );
};

export default UseFetch;

то в любому компоненті можна його використати
import './App.css'
import UsersComponent from "./component/UsersComponent.tsx";
import useFetch from "./hooks/useFetch.tsx";

function App() {
console.log("App");

useFetch()
return (
<>
<UsersComponent/>
</>
)
}

export default App

Оскільки в кастомні хуки ми можемо вкладати якісь інші хуки
то

const UseFetch = () => {
console.log('useFetch');
const [users, setUsers] = useState([]);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com//users')
.then(res => res.json())
.then(value => setUsers(value));

        return ()=> {
            console.log('unsubscribe');
        }


    }, []);

    return  users
//повертаю об'єкт юзерс// звісно можна повернути різноманітну кількість значень не обов'язково пакувати це
    // в [users] масив можна просто звичайний просто об'єкт users або {users}
};

export default UseFetch;
// тере це означає що є хук мій UseFetch який інкапсолює дві інших дії

тобто можна вже створювати власні хуки використовуючи існуючі

якщо захотілось змінювати то довелося у const users = useFetch();повертати масив або об'єкт разом із сетиром 
const UseFetch = () => {
console.log('useFetch');
const [users, setUsers] = useState([]);
useEffect(() => {
fetch('https://jsonplaceholder.typicode.com//users')
.then(res => res.json())
.then(value => setUsers(value));

        return ()=> {
            console.log('unsubscribe');
        }


    }, []);

    return  [users,setUsers] 
};

export default UseFetch;

то на єтапі в UsersComponent діставати 
const [users] = useFetch(); а це в свою чергу означало що б потрібно переробити код,взаленості від ситуації ви можемо це використовувати але по факту так використовувати будем не часто
