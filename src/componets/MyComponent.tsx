import type {FC,ReactNode} from "react";
import styles from "./MyComponent.module.css"

type MyComponentPropType= {
    title:string,
    // children:string
    children?:ReactNode,

}
// children знаходяться між <MyComponent></MyComponent>, і в середині може виступати не стрінг а інше щось
// children:ReactNode, можна давати не кожному  children?:ReactNode
const  MyComponent:FC<MyComponentPropType> =({title,children})=> {
    return (
        <div  className={styles.target}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}

export default MyComponent;
