import type {FC} from "react";
import type {ISimpson} from "../../models/Simpson.ts";



type CharacterComponentPropsType={
    simpson:ISimpson;
}


export const CharacterComponent:FC<CharacterComponentPropsType> = ({simpson}) => {

    return (
        <div className={'simpsonsDiv'}>
            <h2>{simpson.name} {simpson.surname} {simpson.age}</h2>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>

        </div>
    );
};

export default CharacterComponent;
