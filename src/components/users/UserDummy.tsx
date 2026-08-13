import type {FC} from "react";
import type {IUserDummyModel} from "../../models/IUserDummyModel.ts";
import './UserDymmy.css'

type TypeUserDummyProps = {
    item:IUserDummyModel;
}

const UserDummy: FC<TypeUserDummyProps> = ({item}) => {
    return (
        <div className={'div-users'}>
            <h1>
                {item.firstName} {item.lastName}
            </h1>
            <p>Username: {item.username}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Age: {item.age}</p>
            <p>Gender: {item.gender}</p>
            <p>Birth date: {item.birthDate}</p>
            <p>University: {item.university}</p>
            <div>
                <h3>Address</h3>
                <p>Address: {item.address.address}</p>
                <p>City: {item.address.city}</p>
                <p>State: {item.address.state}</p>
                <p>Postal code: {item.address.postalCode}</p>
                <p>Country: {item.address.country}</p>
                <div>
                    <p>Latitude: {item.address.coordinates.lat}</p>
                    <p>Longitude: {item.address.coordinates.lng}</p>
                </div>
            </div>

            <div>
                <h3>Hair</h3>
                <p>Color: {item.hair.color}</p>
                <p>Type: {item.hair.type}</p>
            </div>

            <div>
                <h3>Company</h3>
                <p>Name: {item.company.name}</p>
                <p>Department: {item.company.department}</p>
                <p>Title: {item.company.title}</p>
                <p>Address: {item.company.address.address}</p>
                <p>City: {item.company.address.city}</p>
            </div>

            <div>
                <h3>Bank</h3>
                <p>Card type: {item.bank.cardType}</p>
                <p>Currency: {item.bank.currency}</p>
                <p>IBAN: {item.bank.iban}</p>
            </div>

            <div>
                <h3>Crypto</h3>
                <p>Coin: {item.crypto.coin}</p>
                <p>Wallet: {item.crypto.wallet}</p>
                <p>Network: {item.crypto.network}</p>
            </div>
        </div>
    );
};

export default UserDummy;

