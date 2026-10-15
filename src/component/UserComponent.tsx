import {type FC, memo} from "react";


//приходить функція яка нічого не буде робити і повертати нічого
const UserComponent:FC<{ foo:()=>void, arr:number[], item:{ name:string }}> = memo(({arr,item}) => {
    console.log('user');
    console.log(arr);

    return (
        <div>
            {item.name}
        </div>
    );
})

export default UserComponent;
