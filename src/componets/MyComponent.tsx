// function MyComponent() {
//     return (
//         <div>
//             Hello Okten!
//         </div>
//     )
// }

import type {FC} from "react";
// import './MyComponent.css'
import styles from "./MyComponent.module.css"

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
        // <div className={'target'}>
        <div  className={styles.target}>
            {text}
        </div>
    )
}

export default MyComponent;
