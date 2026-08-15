import {useLocation} from "react-router";
import type {IUserJson} from "../../models/IUserJson.ts";


const UserJsonplaceholder = () => {
    //дістаємо данні
    const {state} = useLocation();
    const user= state as IUserJson


    return (
        <div>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <div>
                <h3>Address</h3>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
                <div>
                    <p>Latitude: {user.address.geo.lat}</p>
                    <p>Longitude: {user.address.geo.lng}</p>
                </div>
            </div>
            <div>
                <h3>Company</h3>
                <p>Name: {user.company.name}</p>
                <p>Catch phrase: {user.company.catchPhrase}</p>
                <p>Business: {user.company.bs}</p>
            </div>


        </div>
    )
};

export default UserJsonplaceholder;
