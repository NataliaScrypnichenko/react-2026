import type {FC} from "react";
import type {IUserJson} from "../../models/IUserJson.ts";
import {Link} from "react-router-dom";


type TypeUserJSonProps = {
    item:IUserJson
}
const UserJsonplaceholderComponent: FC<TypeUserJSonProps> = ({item}) => {

    return (

        <div>
            <Link to={'Jsonplaceholder'} state={item}>Jsonplaceholder</Link>
        </div>
    );
};



export default UserJsonplaceholderComponent;
