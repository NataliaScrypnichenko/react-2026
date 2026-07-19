import type {FC, ReactNode} from "react";
import type {ISimpson} from "../../models/Simpson.ts";
import './CharacterComponent.css';

type CharacterComponentPropsType={
    simpson:ISimpson;
    children: ReactNode;
}


export const CharacterComponent:FC<CharacterComponentPropsType> = ({simpson,children}:CharacterComponentPropsType) => {

    return (
        <div className={'simpsonsDiv'}>
            <h1>{simpson.name} {simpson.surname} {simpson.age}</h1>
            <p className='my-3'>{children}</p>
            <img src={simpson.photo} alt={simpson.name}/>

        </div>
    );
};

export default CharacterComponent;
