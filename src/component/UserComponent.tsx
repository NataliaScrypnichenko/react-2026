import {type FC, memo} from "react";

//приходить функція яка нічого не буде робити і повертати нічого
const UserComponent:FC<{ foo:()=>void }> = memo(() => {
    console.log('user')
    return (
        <div>

        </div>
    );
})

export default UserComponent;
