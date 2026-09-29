import {type FC, memo} from "react";
//тут буде приходити об'єкт, вели функцію і вона нічого не виводить,але її відобразити потрібно в UsersComponent
const UserComponent : FC<{foo:()=> void, arry:number[]}> = memo(() => {
    console.log('user');
     console.log('arry');

    return (
        <div>

        </div>
    );
})

export default UserComponent;
