import {memo} from "react";

// не змінює компонент якщо він не змінюється memo()- тобто не приходять в середину пропси
const UserComponent =memo( () => {
    // виводим дані щоб видно в якій послідовності вони працюють
    console.log('user');
    return (
        <div>

        </div>
    );
});

export default UserComponent;
