export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}
 interface AddressGeo {
	lat: string;
	lng: string;
}
interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: AddressGeo;
}
 interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

