import {simpsons} from "../../data/simpsons.ts";
import CharacterComponent from "../character-Component/CharacterComponent.tsx";


export const FamilyComponent  = () => {
    return(
        <div>
            {
            simpsons.map((value,index)=>
                <CharacterComponent key={index} simpson={value}>
                                {value.info}
                </CharacterComponent>)
             }
        </div>
    );
};

export default FamilyComponent;
