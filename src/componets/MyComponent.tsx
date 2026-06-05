// function MyComponent() {
//     return (
//         <div>
//             Hello Okten!
//         </div>
//     )
// }

import type {FC} from "react";

type MyComponentPropType= {text:string}

// function MyComponent({text}:MyComponentPropType) {
//     return (
//         <div>
//             {text}
//         </div>
//     )
// }

const  MyComponent:FC<MyComponentPropType> =({text})=> {
    return (
        <div>
            {text}
        </div>
    )
}

export default MyComponent;
