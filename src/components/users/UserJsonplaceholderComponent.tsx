import type {FC} from "react";
import type {IUserJson} from "../../models/IUserJson.ts";

type TypeUserJSonProps = {
    item:IUserJson
}
const UserJsonplaceholderComponent: FC<TypeUserJSonProps> = ({item}) => {

    return (
        <div>
            <h2>{item.name}</h2>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item.website}</p>
            <div>
                <h3>Address</h3>
                <p>Street: {item.address.street}</p>
                <p>Suite: {item.address.suite}</p>
                <p>City: {item.address.city}</p>
                <p>Zipcode: {item.address.zipcode}</p>
                <div>
                    <p>Latitude: {item.address.geo.lat}</p>
                    <p>Longitude: {item.address.geo.lng}</p>
                </div>
            </div>
            <div>
                <h3>Company</h3>
                <p>Name: {item.company.name}</p>
                <p>Catch phrase: {item.company.catchPhrase}</p>
                <p>Business: {item.company.bs}</p>
            </div>
        </div>
    );
};



export default UserJsonplaceholderComponent;
